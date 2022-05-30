import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksCreateComponent } from './components/tasks/tasks-create/tasks-create.component';
import { TasksEditComponent } from './components/tasks/tasks-edit/tasks-edit.component';
import { TasksHomeComponent } from './components/tasks/tasks-home/tasks-home.component';

const routes: Routes = [
  { path: 'tasks', component: TasksHomeComponent },
  { path: 'tasks/create', component: TasksCreateComponent },
  { path: 'tasks/edit', component: TasksEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
