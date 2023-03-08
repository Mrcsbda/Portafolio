import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes:Routes=[
    {
        path:'',
        loadChildren:()=>import('./home/home.module').then((m)=>m.HomeModule)
    },
    {
        path:'habilidades',
        loadChildren:()=>import('./skills/skills.module').then((m)=>m.SkillsModule)
    },
    {
        path:'proyectos',
        loadChildren:()=>import('./projects/projects.module').then((m)=>m.ProjectsModule)
    },
    {
        path:'contacto',
        loadChildren:()=>import('./contact/contact.module').then((m)=>m.ContactModule)
    },
    {
        path:'**',
        redirectTo:''
    }
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule {
}