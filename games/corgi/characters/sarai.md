---
title: Sarai (Makyo's character)
---

[Corgi's D&D Campaign](/games/corgi) &raquo; [Characters](/games/corgi/characters)


<div>
  <button id="prev">Previous</button>
  <button id="next">Next</button>
  &nbsp; &nbsp;
  <span>Page: <span id="page_num"></span> / <span id="page_count"></span></span>
</div>
<canvas id="character-sheet"></canvas>
<script type="text/javascript" src="/assets/pdf/pdf.worker.js"></script>
<script type="text/javascript" src="/assets/pdf/pdf.js"></script>
<script type="text/javascript">
// If absolute URL from the remote server is provided, configure the CORS
// header on that server.
var url = 'sheets/sarai-charsheet.pdf';

// Loaded via <script> tag, create shortcut to access PDF.js exports.
var pdfjsLib = window['pdfjs-dist/build/pdf'];

var pdfDoc = null,
    pageNum = 1,
    pageRendering = false,
    pageNumPending = null,
    scale = 1,
    canvas = document.getElementById('character-sheet'),
    ctx = canvas.getContext('2d');

/**
 * Get page info from document, resize canvas accordingly, and render page.
 * @param num Page number.
 */
function renderPage(num) {
  pageRendering = true;
  // Using promise to fetch the page
  pdfDoc.getPage(num).then(function(page) {
    var viewport = page.getViewport(scale);
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    // Render PDF page into canvas context
    var renderContext = {
      canvasContext: ctx,
      viewport: viewport
    };
    var renderTask = page.render(renderContext);

    // Wait for rendering to finish
    renderTask.promise.then(function() {
      pageRendering = false;
      if (pageNumPending !== null) {
        // New page rendering is pending
        renderPage(pageNumPending);
        pageNumPending = null;
      }
    });
  });

  // Update page counters
  document.getElementById('page_num').textContent = num;
}

/**
 * If another page rendering in progress, waits until the rendering is
 * finised. Otherwise, executes rendering immediately.
 */
function queueRenderPage(num) {
  if (pageRendering) {
    pageNumPending = num;
  } else {
    renderPage(num);
  }
}

/**
 * Displays previous page.
 */
function onPrevPage() {
  if (pageNum <= 1) {
    return;
  }
  pageNum--;
  queueRenderPage(pageNum);
}
document.getElementById('prev').addEventListener('click', onPrevPage);

/**
 * Displays next page.
 */
function onNextPage() {
  if (pageNum >= pdfDoc.numPages) {
    return;
  }
  pageNum++;
  queueRenderPage(pageNum);
}
document.getElementById('next').addEventListener('click', onNextPage);

/**
 * Asynchronously downloads PDF.
 */
pdfjsLib.getDocument(url).then(function(pdfDoc_) {
  pdfDoc = pdfDoc_;
  document.getElementById('page_count').textContent = pdfDoc.numPages;

  // Initial/first page rendering
  renderPage(pageNum);
});
</script>

STR    | DEX        | CON    | INT    | WIS        | CHA
-------|------------|--------|--------|------------|-------
7 (-2) | 12 (1) + 2 | 10 (0) | 16 (3) | 12 (1) + 2 | 16 (3)

Race
:   Kobold

Class
:   Ranger

Alignment
:   Chaotic good

Size
:   Small

Speed
:   30 feet

Traits
:  
    * Darkvision --- You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.
    * Grovel cower and beg --- As an action on your turn, you can cower pathetically to distract nearby foes. Until the end of your next turn, your allies gain advantage on attack rolls against enemies within 10 feet of you that can see you. Once you use this trait, you can’t use it again until you finish a short or long rest.
    * Pack tactics --- You have advantage on an attack roll against a creature if at least one of your allies is within 5 feet of the creature and the ally isn’t incapacitated.
    * Sunlight sensitivity --- You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight.
    * False Identity --- You have created a second identity that includes documentation, established acquaintances, and disguises that allow you to assume that persona. Additionally, you can forge documents including official papers and personal letters, as long as you have seen an example of the kind of document or the handwriting you are trying to copy.

Background
:   Merchant/guild member

Weapon
:   Short bow

Description
:   a hypercapitalist kobold with a heart of gold.

Taken from *Volo's Guide to Monsters* and stats from [here](https://www.dandwiki.com/wiki/Kobold_%284e_Race%29) (because Volo's really harsh on Kobolds and everyone complains about it)
