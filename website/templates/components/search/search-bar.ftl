[#assign locale = ctx.getLocale()]
[#assign isLogged = ctx.isLoggedIn!false]
[#assign npSite =  cmsfn.root(content, "mgnl:page")!'']
[#assign navigations = cmsfn.contentByPath("/", "cimpress-navigation") /]
[#assign queryStr = ctx.getParameter('q')!?html]
<script type="text/javascript">
    function callSearch(e) {
        window.location.href = "${ctx.contextPath}/home?q=" + document.getElementById('searchText').value;
        e.preventDefault();
    }
</script>
    
<div class="navbar navbar-default yamm" role="navigation" id="navbar">
    <div class="container">
        <div class="collapse in clearfix" id="search">
            <form class="navbar-form" role="search" onsubmit="callSearch(event)" autocomplete="off">
                <div class="input-group">
                    <input id="searchText" name="searchText" type="text" class="form-control" placeholder="Search" autocomplete="off" value="${queryStr}" required minlength=3>
                    <span class="input-group-btn">
                        <button type="submit" class="btn btn-primary"><i class="fa fa-search"></i></button>
                    </span>
                </div>
            </form>
        </div>
    </div>
</div>
