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
    <div class="container">
        <div class="col-md-6 offer" data-animate="fadeInDown">
             <a href="${ctx.contextPath}/home">
                 ${i18n['product_details.home']}
             </a>
        </div>
        <div class="col-md-6" data-animate="fadeInDown">
            <ul class="menu">
                <li>
                    <a href="#">
                        <i class="fa fa-shopping-cart"></i> <span class="hidden-xs">3 ${i18n['product_details.items_in_cart']}</span>
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
