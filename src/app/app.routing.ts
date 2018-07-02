import { Routes, RouterModule } from "@angular/router";
import { TaskComponent } from './modules/task/task.component';
//import { FormComponent } from "./core/form.component";
//import { NotFoundComponent } from "./core/notFound.component";
//import { ProductCountComponent } from "./core/productCount.component";
//import { CategoryCountComponent } from "./core/categoryCount.component";
//import { ModelResolver } from "./model/model.resolver";
//import { TermsGuard } from "./terms.guard";
//import { UnsavedGuard } from "./core/unsaved.guard";
//import { LoadGuard } from "./load.guard";

const routes: Routes = [
    /*{
        path: "form/:mode/:id", component: FormComponent,
        canDeactivate: [UnsavedGuard]
    },*/
   // { path: "form/:mode", component: FormComponent, canActivate: [TermsGuard] },
    { path: "task", component: TaskComponent }
   // { path: "table/:category", component: TableComponent },
    //{ path: "", redirectTo: "/table", pathMatch: "full" },
    //{ path: "**", component: NotFoundComponent }
]

export const routing = RouterModule.forRoot(routes);
