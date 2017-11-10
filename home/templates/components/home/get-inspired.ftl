<div class="container" data-animate="fadeInUpBig">
    <div class="col-md-12">
        <div class="box slideshow">
            <h3>Get Inspired</h3>
            <p class="lead">Get the inspiration from our world class designers</p>
            <div id="get-inspired" class="owl-carousel owl-theme">
                <div class="item">
                    <a href="#">
                        <img src="${ctx.contextPath}/.resources/home/webresources/img/getinspired1.jpg" alt="Get inspired" class="img-responsive">
                    </a>
                </div>
                <div class="item">
                    <a href="#">
                        <img src="${ctx.contextPath}/.resources/home/webresources/img/getinspired2.jpg" alt="Get inspired" class="img-responsive">
                    </a>
                </div>
                <div class="item">
                    <a href="#">
                        <img src="${ctx.contextPath}/.resources/home/webresources/img/getinspired3.jpg" alt="Get inspired" class="img-responsive">
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

<#-- <div class="get-inspired">
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
</div> -->
