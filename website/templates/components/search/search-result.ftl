[#-------------- ASSIGNMENTS --------------]
[#assign queryStr = ctx.getParameter('q')!?html]
[#if queryStr?has_content]
    [#assign queryStr = "*"+queryStr+"*"]
[/#if]

[#assign currentSiteName = sitefn.site().name ]
<!-- getting the site parameters for currency, country and language -->
[#assign siteParameters = cmsfn.contentByPath("/modules/multisite/config/sites/${currentSiteName}/parameters", "config")!'' /]

[#assign siteRoot = cmsfn.root(content, "mgnl:page")]
[#assign originalQueryStr = ctx.getParameter('q')!?html]

[#---- [#assign searchResults = searchfn.searchContent("dam", "youtube", "/ABC", "mgnl:asset") /] ----------]

[#assign myResource = cmsfn.contentByPath("/", "product-information")]
[#---- here ${myResource?size} ----]

[#if queryStr?has_content]
    [#-------------- [#assign searchResults = searchfn.searchPages(queryStr, '/${siteRoot}') /]--------------]

[#assign total_available = 0]

[#assign imageResult = searchfn.searchContent("dam", "defaultPen", "/ABC", "mgnl:asset") /]
[#if imageResult?has_content]
    [#list imageResult as item]
            [#assign myAsset = damfn.getAsset("jcr", cmsfn.asJCRNode(item).getPath())!]
            [#assign url=myAsset.getLink()]
    [/#list]
[/#if]

[#list cmsfn.children(myResource, "product-information") as child ]
    [#assign searchResults = searchfn.searchContent("product-information", queryStr, "/${child.id}", "mgnl:content")!"" /]
    [#if searchResults?has_content]
        [#assign total_available=total_available+1]
    [/#if]
[/#list]


[#assign recordsFound = total_available /]
[#if recordsFound==0]
    [#assign recordsFound="No"]
[/#if]
<div class="container">
    <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-12">
        ${recordsFound}  product(s) found for the keyword <b> ${originalQueryStr}</b></span>
        </div>
    </div>
</div>

<br>

[#if myResource??]
    [#list cmsfn.children(myResource, "product-information") as child ]

        [#assign searchResults = searchfn.searchContent("product-information", queryStr, "/${child.id}", "mgnl:content")!"" /]

    <div class="container">
        [#if searchResults?has_content]
        [#list searchResults as item]
            <div class="row list-group">
                <div class="col-sm-12 col-md-12 col-lg-12">
                    <a href="${ctx.contextPath}/${siteParameters.countryCode?lower_case}/product-details?productId=${item.id}" class="list-group-item"><img src="${url}" width="100"/>
                            <span class="search-productList">${item["displayName"]}</span>

                    </a>
                </div>
            </div>
        [/#list]
        [/#if]
    </div>
    [/#list]
[/#if]





[/#if]
