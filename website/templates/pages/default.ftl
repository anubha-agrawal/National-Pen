<!DOCTYPE html>
<html xml:lang="${cmsfn.language()}" lang="${cmsfn.language()}">
  <head>
    [@cms.page /]
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${content.windowTitle!content.title!}</title>
    <meta name="description" content="${content.description!""}" />
    <meta name="keywords" content="${content.keywords!""}" />

    <!-- /#head links -->
    [@cms.area name="header-links"/]
  </head>

  <body class="home ${cmsfn.language()}">

     <!-- /#top header -->
    [@cms.area name="header"/]

    <div id="all">

        <div id="content">

             <!-- /#main content -->
           [@cms.area name="main-container"/]

        </div>

        <!-- /#footer content -->
        [@cms.area name="footer"/]

    </div>

    [#-- use resfn to load all js which matches the globbing pattern or link resources manually or via theme --]
    [#-- ${resfn.js(["/website/.*js"])!} --]
    <!-- /#footer js links -->
    [@cms.area name="footer-links"/]
  </body>
</html>
