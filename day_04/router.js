var router=new VueRouter({
  routes:[
    {path:"/", component:Index},
    {path:"/details/:lid",component:Details,props:true},
    {path:"*", component:NotFound}
  ]
})