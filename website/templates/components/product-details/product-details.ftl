[#assign productId = ctx.getParameter('productId')!] 
<div id="product-detail" data-productId="${productId}"></div>

<script type="text/javascript">
     window.product_details = {
     quantity:'${i18n['product_details.quantity']}',
     unit_price:'${i18n['product_details.unit_price']}',
     extra_free:'${i18n['product_details.extra_free']}',
     items_in_cart:'${i18n['product_details.items_in_cart']}',
     home:'${i18n['product_details.home']}',
     add_to_cart:'${i18n['product_details.add_to_cart']}',
     free:'${i18n['product_details.free']}',
     };
     console.log("searchdata",window.product_details);
</script>
