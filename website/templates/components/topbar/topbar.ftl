<div id="top">
[#assign pageNode = cmsfn.page(content)!"unknown"]
[#assign productId = ctx.getParameter('productId')!'']
[#if productId!='']
[#assign pageNode = '${pageNode}?productId=${productId}']
[/#if]

[#assign en_class = '']
[#assign jp_class = '']
[#if cmsfn.language() == 'en_UK']
     [#assign en_class = 'active_lang']
[/#if]
[#if cmsfn.language() == 'ja_JAPAN']
     [#assign jp_class = 'active_lang']
[/#if]
<!-- Get the site name -->
[#assign currentSiteName = sitefn.site().name]
<!-- getting the site parameters for currency, country and language -->
[#assign siteParameters = cmsfn.contentByPath("/modules/multisite/config/sites/${currentSiteName}/parameters", "config")!'' /]
    <div class="container">
        <div class="col-md-6 topleftMenu" data-animate="fadeInDown">
             <a href="${ctx.contextPath}/${siteParameters.countryCode?lower_case}/home">
                 ${i18n['product_details.home']}
             </a>
        </div>
        <div class="col-md-6" data-animate="fadeInDown">
            <ul class="menu">
                <li>
                    <a href="#" class="btn btn-info btn-sm" data-toggle="modal" data-target="#miniBasketModel">
                        <i class="fa fa-shopping-cart"></i> <span class="hidden-xs" id="mini-basket">0 ${i18n['product_details.items_in_cart']}</span>
                    </a>
                </li>
                <li><a href="${ctx.contextPath}/uk/${pageNode}" class="${en_class}">EN</a>
                </li>
                <li><a href="${ctx.contextPath}/jp/${pageNode}" class="${jp_class}">JP</a>
                </li>
            </ul>
        </div>
    </div>
</div>

<div id="mini-basket-popup"></div>
