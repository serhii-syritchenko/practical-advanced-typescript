function redirect(usr) {
    if (usr.role !== undefined) {
        //
    }
    if ('role' in usr) {
        // here will be only Admin
        routeToAdminPage(usr.role);
    }
    else {
        routeToHomePage(usr.email);
    }
}
function routeToAdminPage(role) { }
function routeToHomePage(email) { }
