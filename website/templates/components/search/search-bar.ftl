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
            <form class="navbar-form" role="search" action="callSearch(event)" autocomplete="off">
                <div class="input-group">
                    <input id="searchText" name="searchText" type="text" class="form-control" placeholder="Search" autocomplete="off" value="${queryStr}" >
                    <span class="input-group-btn">
                        <button type="submit" class="btn btn-primary" onclick="callSearch(event)"><i class="fa fa-search"></i></button>
                    </span>
                </div>
            </form>
        </div>
    </div>
</div>
