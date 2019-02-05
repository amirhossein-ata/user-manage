(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{247:function(e,t,n){e.exports=n(423)},423:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(60),s=n.n(o),c=n(29),i=n(54),l=n(24),u=n(126),d=n.n(u),m=n(140),h=function(e,t,n){var a="".concat("https://reqres.in/api","/").concat(e);fetch(a,Object(l.a)({},t,{headers:{"Content-Type":"application/json"}})).then(function(){var e=Object(m.a)(d.a.mark(function e(t){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t.status,e.next=404===e.t0?3:204===e.t0?7:400===e.t0?10:14;break;case 3:return console.log("Error","Not found"),e.next=6,t.json();case 6:throw e.sent;case 7:return console.log("Success","No content response"),n({},!0),e.abrupt("return");case 10:return console.log("Error","Bad request"),e.next=13,t.json();case 13:throw e.sent;case 14:return e.abrupt("return",t.json());case 15:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()).then(function(e){void 0!==e&&(console.log("Success",e),n(e,!0))}).catch(function(e){console.log("Error",e),n(e,!1)})},p=function(e,t,n,a){var r="".concat("https://reqres.in/api","/").concat(e);fetch(r,Object(l.a)({},t,{headers:{Authorization:"Bearer ".concat(n),"Content-Type":"application/json"}})).then(function(){var e=Object(m.a)(d.a.mark(function e(t){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t.status,e.next=400===e.t0?3:401===e.t0?7:404===e.t0?11:204===e.t0?15:18;break;case 3:return console.log("Error","Bad Request"),e.next=6,t.json();case 6:throw e.sent;case 7:return console.log("Error","Authorization failed"),e.next=10,t.json();case 10:throw e.sent;case 11:return console.log("Error","Not found"),e.next=14,t.json();case 14:throw e.sent;case 15:return console.log("Success","No content response"),a({},!0),e.abrupt("return");case 18:return e.abrupt("return",t.json());case 19:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()).then(function(e){void 0!==e&&(console.log("Success",e),a(e,!0))}).catch(function(e){console.log("Error",e),a(e,!1)})},f=n(214),g=n.n(f)()(),E="LOGIN_SUCCESS",b="LOGIN_FAILURE",S="REGISTER_SUCCESS",v="REGISTER_FAILURE",O="LOGOUT",C=function(e,t){return function(n){!function(e,t){var n={email:e.email,password:e.password},a={method:"POST",body:JSON.stringify(n)};h("login",a,t)}(e,function(e,a){a?(localStorage.setItem("token",e.token),g.push("/dashboard"),n({type:E})):n({type:b}),t(e,a)})}},j=function(e,t){return function(n){!function(e,t){var n={email:e.email,password:e.password},a={method:"POST",body:JSON.stringify(n)};h("register",a,t)}(e,function(e,a){a?(localStorage.setItem("token",e.token),n({type:S}),g.push("/dashboard")):n({type:v}),t(e,a)})}},_={loggedIn:!!localStorage.getItem("token"),registerError:"",loginError:""},y=n(237),I="GET_SINGLE_USER_SUCCESS",w="GET_SINGLE_USER_FAILURE",L="GET_USERS_LIST_SUCCESS",k="GET_USERS_LIST_FAILURE",U="DELETE_USER_SUCCESS",A="UPDATE_USER_SUCCESS",M="ADD_USER_SUCCESS",R=function(e,t){return function(n){!function(e,t,n){var a="users/".concat(t);p(a,{method:"GET"},e,n)}(localStorage.getItem("token"),e,function(e,a){var r;n(a?(r=e.data,{type:I,user:r}):{type:w}),t(e,a)})}},x=function(e){return{type:L,users:e}},T=function(e,t){return function(n){!function(e,t,n){var a="users/?page=".concat(t);p(a,{method:"GET"},e,n)}(localStorage.getItem("token"),e,function(e,a){n(a?x(e.data):{type:k}),t(e,a)})}},F={usersList:[],user:void 0,fetchUsersListError:!1,fetchUserError:!1},N=Object(i.c)({registerReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_;switch((arguments.length>1?arguments[1]:void 0).type){case E:case S:return Object(l.a)({},e,{loggedIn:!0});case b:return Object(l.a)({},e,{loggedIn:!1,loginError:!0});case v:return Object(l.a)({},e,{loggedIn:!1,registerError:!0});case O:return Object(l.a)({},e,{loggedIn:!1});default:return e}},usersReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t),t.type){case I:return Object(l.a)({},e,{user:t.user});case w:return Object(l.a)({},e,{fetchUserError:!0});case L:return Object(l.a)({},e,{usersList:t.users});case k:return Object(l.a)({},e,{fetchUsersListError:!0});case U:var n=e.usersList.filter(function(e){return e.id!==t.userId});return Object(l.a)({},e,{usersList:n});case A:return n=e.usersList.map(function(e){return e.id===t.credentials.id?Object(l.a)({},e,t.credentials):e}),Object(l.a)({},e,{usersList:n});case M:var a={id:e.usersList.length+1,first_name:t.credentials.first_name,last_name:t.credentials.last_name};return n=[].concat(Object(y.a)(e.usersList),[a]),Object(l.a)({},e,{usersList:n});default:return e}}}),G=n(215),D=n(17),z=n(18),q=n(21),J=n(19),P=n(22),B=n(143),H=n(441),K=n(436),Q=n(446),V=n(442),W=n(443),X=n(434),Y=n(438),Z=n(440),$=function(e){function t(e){var n;return Object(D.a)(this,t),(n=Object(q.a)(this,Object(J.a)(t).call(this,e))).handle_change=function(e){var t=e.target.value,a=n.state.credentials,r=e.target.name;a[r]=t,n.setState(function(){return{credentials:a}}),n.props.onChange(r,t)},n.onSubmit=function(){n.props.onSubmit(n.state.credentials)},n.state={credentials:{email:e.email,password:e.password}},n}return Object(P.a)(t,e),Object(z.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(X.a,{onSubmit:this.onSubmit},r.a.createElement(X.a.Field,null,r.a.createElement(X.a.Input,{fluid:!0,label:"\u0627\u06cc\u0645\u06cc\u0644",name:"email",value:this.state.credentials.email,onChange:this.handle_change})),r.a.createElement(X.a.Field,null,r.a.createElement(X.a.Input,{fluid:!0,label:"\u0631\u0645\u0632 \u0639\u0628\u0648\u0631",name:"password",type:"password",value:this.state.credentials.password,onChange:this.handle_change})),this.props.submitError&&r.a.createElement(Y.a,{negative:!0},"\u0645\u0634\u06a9\u0644\u06cc \u067e\u06cc\u0634 \u0622\u0645\u062f\u0647 \u0627\u0633\u062a \u0644\u0637\u0641\u0627 \u0645\u062c\u062f\u062f \u0627\u0645\u062a\u062d\u0627\u0646 \u06a9\u0646\u06cc\u062f."),r.a.createElement(Z.a,{primary:!0,type:"submit"},"\u0648\u0631\u0648\u062f")))}}]),t}(r.a.Component),ee=function(e){function t(){var e,n;Object(D.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(q.a)(this,(e=Object(J.a)(t)).call.apply(e,[this].concat(r)))).state={credentials:{password:"",email:""},loginError:!1,loginSuccess:!1},n.onSubmit=function(){n.props.login(n.state.credentials,function(e,t){t?n.onLoginSuccess():n.onLoginFailure()})},n.handle_change=function(e,t){var a=n.state.credentials;a[e]=t,n.setState(function(){return{credentials:a}})},n.onLoginFailure=function(){n.setState(function(){return{loginError:!0,loginSuccess:!1}})},n.onLoginSuccess=function(){n.setState(function(){return{loginSuccess:!0,loginError:!1}}),n.props.getUsersList(n.state.page,function(e,t){})},n}return Object(P.a)(t,e),Object(z.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(V.a,{centered:!0},r.a.createElement(V.a.Column,{computer:15,tablet:12,mobile:14,textAlign:"right"},r.a.createElement(W.a,{dividing:!0},"\u0641\u0631\u0645 \u0648\u0631\u0648\u062f"),r.a.createElement($,{onSubmit:this.onSubmit,email:this.state.credentials.email,password:this.state.credentials.password,onSubmitSuccess:this.onLoginSuccess,onSubmitFailure:this.onLoginFailure,submitError:this.state.loginError,submitSuccess:this.state.loginSuccess,onChange:this.handle_change}))))}}]),t}(r.a.Component),te=Object(c.b)(void 0,function(e){return{login:function(t,n){return e(C(t,n))},getUsersList:function(t,n){return e(T(t,n))}}})(ee),ne=function(e){function t(){var e,n;Object(D.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(q.a)(this,(e=Object(J.a)(t)).call.apply(e,[this].concat(r)))).state={credentials:{password:"",email:""},registerError:!1,registerSuccess:!1},n.onSubmit=function(){n.props.register(n.state.credentials,function(e,t){t?n.onRegisterSuccess():n.onRegisterFailure()})},n.handle_change=function(e,t){var a=n.state.credentials;a[e]=t,n.setState(function(){return{credentials:a}})},n.onRegisterFailure=function(){n.setState(function(){return{registerError:!0,registerSuccess:!1}})},n.onRegisterSuccess=function(){n.setState(function(){return{registerSuccess:!0,registerError:!1}}),n.props.getUsersList(n.state.page,function(e,t){})},n}return Object(P.a)(t,e),Object(z.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(V.a,{centered:!0},r.a.createElement(V.a.Column,{computer:15,tablet:12,mobile:14,textAlign:"right"},r.a.createElement(W.a,{dividing:!0},"\u0641\u0631\u0645 \u062b\u0628\u062a \u0646\u0627\u0645"),r.a.createElement($,{onSubmit:this.onSubmit,email:this.state.credentials.email,password:this.state.credentials.password,onSubmitSuccess:this.onRegisterSuccess,onSubmitFailure:this.onRegisterFailure,submitError:this.state.registerError,submitSuccess:this.state.registerSuccess,onChange:this.handle_change}))))}}]),t}(r.a.Component),ae=Object(c.b)(void 0,function(e){return{register:function(t,n){return e(j(t,n))},getUsersList:function(t,n){return e(T(t,n))}}})(ne),re=n(433),oe=n(439),se=n(444),ce=function(e){function t(){var e,n;Object(D.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(q.a)(this,(e=Object(J.a)(t)).call.apply(e,[this].concat(r)))).state={activeItem:"login"},n.handleItemClick=function(e,t){var a=t.name;return n.setState({activeItem:a})},n}return Object(P.a)(t,e),Object(z.a)(t,[{key:"render",value:function(){var e=this.state.activeItem;return r.a.createElement(V.a,{centered:!0},r.a.createElement(V.a.Column,{width:"10"},r.a.createElement(re.a,{hidden:!0,section:!0}),r.a.createElement(oe.a,{attached:"top",tabular:!0},r.a.createElement(oe.a.Item,{position:"right",name:"register",content:"\u062b\u0628\u062a \u0646\u0627\u0645",active:"register"===e,onClick:this.handleItemClick}),r.a.createElement(oe.a.Item,{name:"login",content:"\u0648\u0631\u0648\u062f",active:"login"===e,onClick:this.handleItemClick})),r.a.createElement(se.a,{attached:"bottom"},"login"===this.state.activeItem?r.a.createElement(te,null):r.a.createElement(ae,null))))}}]),t}(r.a.Component),ie=n(437),le=n(424),ue=n(435),de=function(e){return r.a.createElement(ue.a,{open:e.profileModalOpen,onClose:e.handleClose,closeIcon:!0,size:"tiny",dimmer:!0},r.a.createElement(ue.a.Content,null,r.a.createElement(V.a,{centered:!0},r.a.createElement(le.a,{src:e.avatar})),r.a.createElement(V.a,{centered:!0},r.a.createElement("p",null,e.firstName," ",e.lastName))))},me=n(124),he=function(e){return r.a.createElement(ue.a,{open:e.deleteModalOpen,onClose:e.handleClose,closeIcon:!0,size:"tiny",dimmer:"blurring"},r.a.createElement(W.a,{icon:"trash"}),r.a.createElement(ue.a.Content,null,r.a.createElement("p",{style:{textAlign:"right"}},"\u0622\u06cc\u0627\u0627\u0632 \u062d\u0630\u0641 \u06a9\u0631\u062f\u0646 \u0627\u06cc\u0646 \u06a9\u0627\u0631\u0628\u0631 \u0627\u0637\u0645\u06cc\u0646\u0627\u0646 \u062f\u0627\u0631\u06cc\u062f\u061f")),r.a.createElement(ue.a.Actions,null,r.a.createElement(Z.a,{color:"red",inverted:!0},r.a.createElement(me.a,{name:"remove"})," \u062e\u06cc\u0631"),r.a.createElement(Z.a,{onClick:e.onDelete,color:"green",inverted:!0},r.a.createElement(me.a,{name:"checkmark"})," \u0628\u0644\u0647")))},pe=function(e){function t(){var e,n;Object(D.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(q.a)(this,(e=Object(J.a)(t)).call.apply(e,[this].concat(r)))).state={credentials:{first_name:"",last_name:""}},n.handle_change=function(e){var t=e.target.value,a=n.state.credentials,r=e.target.name;a[r]=t,n.setState(function(){return{credentials:a}}),n.props.onChange(r,t)},n}return Object(P.a)(t,e),Object(z.a)(t,[{key:"render",value:function(){return r.a.createElement(ue.a,{open:this.props.addModalOpen,onClose:this.props.handleClose,closeIcon:!0,size:"tiny",dimmer:"blurring"},r.a.createElement(W.a,{icon:"add user"}),r.a.createElement(ue.a.Content,null,r.a.createElement(X.a,null,r.a.createElement(X.a.Group,{widths:"equal"},r.a.createElement(X.a.Input,{name:"last_name",value:this.state.credentials.last_name,onChange:this.handle_change,fluid:!0,label:"\u0646\u0627\u0645 \u062e\u0627\u0646\u0648\u0627\u062f\u06af\u06cc"}),r.a.createElement(X.a.Input,{name:"first_name",value:this.state.credentials.first_name,onChange:this.handle_change,fluid:!0,label:"\u0646\u0627\u0645"})))),r.a.createElement(ue.a.Actions,null,r.a.createElement(Z.a,{onClick:this.props.onSubmit,color:"green",inverted:!0},"\u062b\u0628\u062a")))}}]),t}(r.a.Component),fe=function(e){function t(e){var n;return Object(D.a)(this,t),(n=Object(q.a)(this,Object(J.a)(t).call(this,e))).handle_change=function(e){var t=e.target.value,a=n.state.credentials,r=e.target.name;a[r]=t,n.setState(function(){return{credentials:a}}),n.props.onChange(r,t)},console.log(e),n.state={credentials:{first_name:"",last_name:""}},n}return Object(P.a)(t,e),Object(z.a)(t,[{key:"render",value:function(){return r.a.createElement(ue.a,{open:this.props.updateModalOpen,onClose:this.props.handleClose,closeIcon:!0,size:"tiny",dimmer:"blurring"},r.a.createElement(W.a,{icon:"edit"}),r.a.createElement(ue.a.Content,null,r.a.createElement(X.a,null,r.a.createElement(X.a.Group,{widths:"equal"},r.a.createElement(X.a.Input,{name:"last_name",value:this.state.credentials.last_name,onChange:this.handle_change,fluid:!0,label:"\u0646\u0627\u0645 \u062e\u0627\u0646\u0648\u0627\u062f\u06af\u06cc"}),r.a.createElement(X.a.Input,{name:"first_name",value:this.state.credentials.first_name,onChange:this.handle_change,fluid:!0,label:"\u0646\u0627\u0645"})))),r.a.createElement(ue.a.Actions,null,r.a.createElement(Z.a,{onClick:this.props.onSubmit,color:"green",inverted:!0},"\u062b\u0628\u062a")))}}]),t}(r.a.Component),ge=function(e){function t(){var e,n;Object(D.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(q.a)(this,(e=Object(J.a)(t)).call.apply(e,[this].concat(r)))).onLogout=function(){localStorage.removeItem("token"),n.props.logout()},n}return Object(P.a)(t,e),Object(z.a)(t,[{key:"render",value:function(){return r.a.createElement(oe.a,{fluid:!0,size:"large"},r.a.createElement(oe.a.Item,{onClick:this.onLogout},"\u062e\u0631\u0648\u062c"))}}]),t}(r.a.Component),Ee=Object(c.b)(void 0,function(e){return{logout:function(){return e({type:O})}}})(ge),be=function(e){function t(){var e,n;Object(D.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(q.a)(this,(e=Object(J.a)(t)).call.apply(e,[this].concat(r)))).state={credentials:{first_name:"",last_name:""},fetchError:!1,profileModalOpen:!1,deleteModalOpen:!1,updateModalOpen:!1,addModalOpen:!1,user:""},n.handleClose=function(e){switch(e){case"profile":n.setState(function(){return{profileModalOpen:!1}});break;case"delete":n.setState(function(){return{deleteModalOpen:!1}});break;case"add":n.setState(function(){return{addModalOpen:!1}});break;case"update":n.setState(function(){return{updateModalOpen:!1}})}n.setState(function(){return{user:""}})},n.onShowProfileClick=function(e){var t=n.props.usersList.findIndex(function(t){return t.id===e}),a=n.props.usersList[t];n.setState(function(){return{user:a,profileModalOpen:!0}})},n.onShowDeleteModal=function(e){var t=n.props.usersList.findIndex(function(t){return t.id===e}),a=n.props.usersList[t];n.setState(function(){return{user:a,deleteModalOpen:!0}})},n.onShowUpdateModel=function(e){var t=n.props.usersList.findIndex(function(t){return t.id===e}),a=n.props.usersList[t];n.setState(function(){return{user:a,updateModalOpen:!0}})},n.onShowAddModal=function(){n.setState(function(){return{addModalOpen:!0}})},n.handleInpuChange=function(e,t){var a=n.state.credentials;a[e]=t,n.setState(function(){return{credentials:a}})},n.onAddUser=function(){n.props.addUser(n.state.credentials)},n.onUpdate=function(){var e={id:n.state.user.id,first_name:n.state.credentials.first_name,last_name:n.state.credentials.last_name};n.props.updateUser(e)},n.onConfirmDelete=function(){n.props.deleteUser(n.state.user.id)},n}return Object(P.a)(t,e),Object(z.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("users"));this.props.loadUsersFromLocalStorage(e)}},{key:"componentDidUpdate",value:function(){localStorage.setItem("users",JSON.stringify(this.props.usersList))}},{key:"render",value:function(){var e=this,t="https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg";return r.a.createElement(V.a,{centered:!0,textAlign:"right"},r.a.createElement(Ee,null),r.a.createElement(de,{profileModalOpen:this.state.profileModalOpen,handleClose:function(){return e.handleClose("profile")},avatar:this.state.user.avatar?this.state.user.avatar:t,firstName:this.state.user.first_name,lastName:this.state.user.last_name}),r.a.createElement(he,{deleteModalOpen:this.state.deleteModalOpen,handleClose:function(){return e.handleClose("delete")},onDelete:this.onConfirmDelete}),r.a.createElement(pe,{addModalOpen:this.state.addModalOpen,handleClose:function(){return e.handleClose("add")},onSubmit:this.onAddUser,onChange:this.handleInpuChange}),r.a.createElement(fe,{updateModalOpen:this.state.updateModalOpen,handleClose:function(){return e.handleClose("update")},onSubmit:this.onUpdate,onChange:this.handleInpuChange}),r.a.createElement(V.a.Row,null,r.a.createElement(V.a.Column,{width:"10"},r.a.createElement("br",null),r.a.createElement(W.a,{dividing:!0,textAlign:"right"},"\u0644\u06cc\u0633\u062a \u06a9\u0627\u0631\u0628\u0631\u0627\u0646"))),r.a.createElement(V.a.Column,{width:"10"},this.state.fetchError?r.a.createElement(Y.a,{negative:!0},"\u0645\u0634\u06a9\u0644\u06cc \u062f\u0631 \u06af\u0631\u0641\u062a\u0646 \u06a9\u0627\u0631\u0628\u0631\u0627\u0646 \u067e\u06cc\u0634 \u0622\u0645\u062f\u0647 \u0627\u0633\u062a."):r.a.createElement("div",null,this.props.usersList.length>0?r.a.createElement(ie.a,{divided:!0,verticalAlign:"middle"},this.props.usersList.map(function(n){return r.a.createElement(ie.a.Item,null,r.a.createElement(ie.a.Content,{floated:"right"},r.a.createElement(Z.a,{onClick:function(){return e.onShowDeleteModal(n.id)},basic:!0,color:"red",content:"Red"},"\u062d\u0630\u0641"),r.a.createElement(Z.a,{onClick:function(){return e.onShowUpdateModel(n.id)},basic:!0,color:"orange",content:"orange"},"\u0627\u06cc\u062c\u0627\u062f \u062a\u063a\u06cc\u06cc\u0631"),r.a.createElement(Z.a,{onClick:function(){return e.onShowProfileClick(n.id)},basic:!0,color:"blue",content:"blue"},"\u0645\u0634\u0627\u0647\u062f\u0647\u200c\u06cc \u067e\u0631\u0648\u0641\u0627\u06cc\u0644")),r.a.createElement(le.a,{avatar:!0,src:n.avatar?n.avatar:t}),r.a.createElement(ie.a.Content,null,n.first_name," ",n.last_name))})):r.a.createElement(Y.a,{info:!0},"\u06a9\u0627\u0631\u0628\u0631\u06cc \u0648\u062c\u0648\u062f \u0646\u062f\u0627\u0631\u062f"),r.a.createElement(re.a,{hidden:!0,section:!0}),r.a.createElement(V.a,{centered:!0},r.a.createElement(Z.a,{onClick:this.onShowAddModal,color:"green"},"\u0627\u0636\u0627\u0641\u0647 \u06a9\u0631\u062f\u0646 \u06a9\u0627\u0631\u0628\u0631")))))}}]),t}(r.a.Component),Se=Object(c.b)(function(e){return{usersList:e.usersReducer.usersList}},function(e){return{getUsersList:function(t,n){return e(T(t,n))},getSingleUser:function(t,n){return e(R(t,n))},deleteUser:function(t){return e(function(e){return{type:U,userId:e}}(t))},updateUser:function(t){return e(function(e){return{type:A,credentials:e}}(t))},addUser:function(t){return e(function(e){return{type:M,credentials:e}}(t))},loadUsersFromLocalStorage:function(t){return e(x(t))}}})(be),ve=function(e){var t=e.component,n=e.isAuthenticated,a=Object(B.a)(e,["component","isAuthenticated"]);return r.a.createElement(H.a,Object.assign({},a,{render:function(e){return!0===n?r.a.createElement(t,e):r.a.createElement(K.a,{to:"/"})}}))},Oe=function(e){var t=e.component,n=e.isAuthenticated,a=Object(B.a)(e,["component","isAuthenticated"]);return r.a.createElement(H.a,Object.assign({},a,{render:function(e){return!0===n?r.a.createElement(K.a,{to:"/dashboard"}):r.a.createElement(t,e)}}))},Ce=function(e){function t(){return Object(D.a)(this,t),Object(q.a)(this,Object(J.a)(t).apply(this,arguments))}return Object(P.a)(t,e),Object(z.a)(t,[{key:"render",value:function(){return r.a.createElement(Q.a,{history:g},r.a.createElement("div",null,r.a.createElement(Oe,{path:"/",isAuthenticated:this.props.isAuthenticated,component:ce,exact:!0}),r.a.createElement(ve,{isAuthenticated:this.props.isAuthenticated,path:"/dashboard",component:Se})))}}]),t}(r.a.Component),je=Object(c.b)(function(e){return{isAuthenticated:e.registerReducer.loggedIn}})(Ce),_e=(n(420),Object(i.d)(N,Object(i.a)(G.a))),ye=r.a.createElement(c.a,{store:_e},r.a.createElement(je,null));s.a.render(ye,document.getElementById("root"))}},[[247,2,1]]]);
//# sourceMappingURL=main.fd16c641.chunk.js.map