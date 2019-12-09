interface Admin {
	id: string
	role: string
}

interface User {
	email: string
}

function redirect(usr: Admin | User) {
	if ((<Admin>usr).role !== undefined) {
		// usr.role
	}

	if ('role' in usr) {
		// here will be only Admin
		routeToAdminPage(usr.role);
	} else {
		routeToHomePage(usr.email);
	}
}

function routeToAdminPage(role) {}
function routeToHomePage(email) {}