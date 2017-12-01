
[#assign orderNo = ctx.getParameter('orderno')!'']

<div id="order-confirmation"  data-orderNo="${orderNo}"></div>
<script type="text/javascript">
     window.order_confirmation = {
        heading:'${i18n['order_confirmation.heading']}',
        title:'${i18n['order_confirmation.title']}',
        orderid:'${i18n['order_confirmation.orderid']}',
        continue:'${i18n['order_confirmation.continue']}',
        
     };
     
</script>