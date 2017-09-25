requireAllControllers((<any>require).context('./', true, /controller.ts$/));
function requireAllControllers(r: any): any {
	r.keys().forEach(r);
}