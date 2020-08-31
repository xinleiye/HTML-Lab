var menuConfig = [
    {
        index: "m1",
        title: "首页",
        href: "#home",
        children: [
            {
                index: "m1-sm1",
                title: "欢迎到来",
                href: "#home"
            }
        ]
    },
    {
        index: "m2",
        title: "信息公告",
        href: "#list",
        children: [
            {
                index: "m2-sm1",
                title: "公开招标公告",
                href: "#list"
            },
            {
                index: "m2-sm2",
                title: "招标公告",
                href: "#"
            },
            {
                index: "m2-sm3",
                title: "资格预审公告",
                href: "#"
            },
            {
                index: "m2-sm4",
                title: "用户自注册审批查询",
                href: "#"
            }
        ]
    }
];
function createMenu (target) {
    var menuItem;
    var menuWrap = "<div class='menu-box'><ul id='menu'>%list%</ul></div>";
    var subMenuWrap = "<div class='sub-menu-box'><ul id='menu'>%list%</ul></div>";
    var menuHtml = "";
    var subMenuHtml = "";

    for (var i = 0, len = menuConfig.length; i < len; i++) {
        menuItem = menuConfig[i];
        menuHtml += createMainMenu(menuItem);
        if (menuItem.children && menuItem.children.length > 0) {
            subMenuHtml += createSubMenu(menuItem.children);
        }
    }
    console.log(target);
    target.html(menuWrap.replace("%list%", menuHtml) + subMenuWrap.replace("%list%", subMenuHtml));
    // console.log(menuWrap.replace("%list", menuHtml) + subMenuWrap.replace("%list", subMenuHtml));
}
function createMainMenu (menuObj) {
    var html = "";
    var menuItem = "<li id='id' class='menu-item-normal'><a href='%herf%'>%title%</a></li>";
    var menuSplit = "<li class='menu-item-line'><img src='../../assets/images/line1.gif'/></li>";

    html += menuSplit;
    html += menuItem.replace("%id%", menuObj.index).replace("%href%", menuObj.href).replace("%title%", menuObj.title);

    return html;
}
function createSubMenu (subMenu) {
    var html = "";
    var subMenuObj;
    var submenuHtml = "<li class='menu-item-normal'>%link%</li>";
    var submenuItem = "<a href='%href%'>%title%</a>";
    var menuSplit = "<span>|</span>";

    for (var i = 0, len = subMenu.length; i < len; i++) {
        subMenuObj = subMenu[i];
        html += submenuItem.replace("%href%", subMenuObj.href).replace("%title%", subMenuObj.title);
        if (i < len - 1) {
            html += menuSplit;
        }
    }

    return submenuHtml.replace("%link%", html);
}
function initMenu (target) {
    createMenu(target);
}
