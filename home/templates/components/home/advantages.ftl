<div id="advantages">

    <div class="container">
        <div class="same-height-row">
            <div class="col-sm-4">
                <div class="box same-height clickable">
                    <div class="icon"><i class="fa fa-heart"></i>
                    </div>

                    <h3><a href="#">We love our customers</a></h3>
                    <p>We are known to provide best possible service ever</p>
                </div>
            </div>

            <div class="col-sm-4">
                <div class="box same-height clickable">
                    <div class="icon"><i class="fa fa-tags"></i>
                    </div>

                    <h3><a href="#">Best prices</a></h3>
                    <p>You can check that the height of the boxes adjust when longer text like this one is used in one of them.</p>
                </div>
            </div>

            <div class="col-sm-4">
                <div class="box same-height clickable">
                    <div class="icon"><i class="fa fa-thumbs-up"></i>
                    </div>

                    <h3><a href="#">100% satisfaction guaranteed</a></h3>
                    <p>Free returns on everything for 3 months.</p>
                </div>
            </div>
        </div>
        <!-- /.row -->

    </div>
    <!-- /.container -->

</div>

<#-- <div class="advantages">
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