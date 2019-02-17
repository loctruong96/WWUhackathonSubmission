import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Statistica from '@/components/pages/Statistica'
import TellStory from '@/components/pages/TellStory'
import ViewCard from '@/components/pages/ViewCard'

Vue.use(Router);

export default new Router({
    // mode: 'history',
    // hash: true,
    routes: [
        {path: '/', name: 'home', component: Home},
        {path: '/tellstory', name: 'tellstory', component: TellStory},
        {path: '/statistica', name: 'statistic', component: Statistica},
        {path: '/card/:cardname', name: 'viewcard', component: ViewCard},
    ]
})
