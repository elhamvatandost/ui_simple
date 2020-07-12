import MasterPage from './components/shared/MasterPage.vue';
import Student from './components/pages/Student.vue';
import List from './components/pages/List.vue';

export const routes = [{
    path: "/",
    component: MasterPage,
    children : [{
        path: "",
        name : 'student',
        component: Student
    },{
        path: "list",
        name : 'list',
        component: List
    }]
}]