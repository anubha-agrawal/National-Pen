<div class="box text-center" data-animate="fadeInUp">
    <div class="container">
        <div class="col-md-12">
            <h3 class="text-uppercase">From our blog</h3>

            <p class="lead">What's new in the world of fashion? <a href="blog.html">Check our blog!</a>
            </p>
        </div>
    </div>
</div>

<div class="container">

    <div class="col-md-12" data-animate="fadeInUp">

        <div id="blog-homepage" class="row">
            <div class="col-sm-6">
                <div class="post">
                    <h4><a href="post.html">Fashion now</a></h4>
                    <p class="author-category">By <a href="#">John Slim</a> in <a href="">Fashion and style</a>
                    </p>
                    <hr>
                    <p class="intro">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
                        ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                    <p class="read-more"><a href="post.html" class="btn btn-primary">Continue reading</a>
                    </p>
                </div>
            </div>

            <div class="col-sm-6">
                <div class="post">
                    <h4><a href="post.html">Who is who - example blog post</a></h4>
                    <p class="author-category">By <a href="#">John Slim</a> in <a href="">About Minimal</a>
                    </p>
                    <hr>
                    <p class="intro">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
                        ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                    <p class="read-more"><a href="post.html" class="btn btn-primary">Continue reading</a>
                    </p>
                </div>

            </div>

        </div>
        <!-- /#blog-homepage -->
    </div>
</div>

<#-- <div class="blog">
  [#if content.title?has_content]
    <h2>${content.title!}</h2>
  [/#if]

  [#if content.image?has_content]
    [#assign image = damfn.getAsset(content.image)]
    [#assign imageLink = image.link]
    <img
      src='${imageLink!}'
      class='img-responsive'
      alt='${content.caption!"image"}'>
  [/#if]

  [#if content.desc?has_content]
    ${cmsfn.decode(content).desc!}
  [/#if]

  [#if content.internalLink?has_content]
    [#assign target = cmsfn.contentById(content.internalLink, "website")!]
    <a href='${ctx.contextPath}/${cmsfn.link(target)!}' class='btn btn-link'>${target.title!target.@name}</a>
  [/#if]

  [#if content.categories?has_content && content.categories?size > 0]
    [#list content.categories as item]
      [#assign category = cmsfn.contentById(item, "category")!]
      <span class="label label-default">${category.name!category.@name!}</span>
    [/#list]
  [/#if]

  [#if content.option?has_content]
    <div>${content.option!}</div>
  [/#if]
</div>
 -->