(this["webpackJsonpreact-quiz-update"]=this["webpackJsonpreact-quiz-update"]||[]).push([[0],{15:function(e,t,n){e.exports={success:"_2-E4Btq0JNs7OODXyJh3GE",error:"_1THEVQzIXUcbMVZYc0fiPM"}},17:function(e,t,n){e.exports={wrapper:"JlzYRK7KaDWUA-otbNPaL",content:"_3vJYK3OyuzSpI_detlt5pz",centerContent:"_3VX8FwJpIbo0qa1LLgFtEr"}},23:function(e,t,n){e.exports={title:"Y_VgeWyMENmf056Bs6Sfu",h1:"_2CqA4e3uS5aIpnwwbD-OI2",h2:"_16FVhRPEDcR7RP6X0jqzIM",h3:"_3_dUf-IobNOWOiUs6a_vlw",h4:"_2dBP98KSQqMJelBsXiCgdF",h5:"_1l1jWYfEkXb6gug8PxZTOd"}},24:function(e,t,n){e.exports={description:"FvrBZzxh_RkCLByMKulP-",red:"_123flmYW5QetwKjRCfT98J",green:"_3fM2ewyp6Np9D6K9KCqIBD"}},25:function(e,t,n){e.exports={container:"Ct8WUYRVETg8hHGCFCkoo",buttons:"_2y8ffeZRQU8d-UV87mIC5F"}},32:function(e,t,n){e.exports={footer:"_2DhuaRb3p5XASh9NABW8qS"}},33:function(e,t,n){e.exports={button:"KeFJuRhGDrJes2mAtgsvd"}},34:function(e,t,n){e.exports={button:"_31EX70j4uyRtzjwXcZpX9P"}},35:function(e,t,n){e.exports={container:"BKOZDtgU94wBdGs7hqFP1"}},37:function(e,t,n){e.exports={container:"_2HN4AMoqskXAvrqfYU3BUz"}},38:function(e,t,n){e.exports=n(52)},50:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"NAME_APPLICATION",(function(){return _})),n.d(r,"DELAY_TIMER",(function(){return x}));var i={};n.r(i),n.d(i,"index",(function(){return O})),n.d(i,"quiz",(function(){return N})),n.d(i,"result",(function(){return A}));var c={};n.r(c),n.d(c,"QUIZ_INITIAL",(function(){return v})),n.d(c,"QUIZ_NEXT_QUESTION",(function(){return C})),n.d(c,"QUIZ_CORRECT_ANSWER",(function(){return S})),n.d(c,"QUIZ_INCORRECT_ANSWER",(function(){return T})),n.d(c,"QUIZ_END",(function(){return R}));var o={};n.r(o),n.d(o,"base",(function(){return r})),n.d(o,"actionTypes",(function(){return c})),n.d(o,"routes",(function(){return i}));var u={};n.r(u),n.d(u,"getIdentifier",(function(){return L}));var a={};n.r(a),n.d(a,"quizSelector",(function(){return Y})),n.d(a,"quizQuestionSelector",(function(){return F})),n.d(a,"quizNumberQuestionSelector",(function(){return J})),n.d(a,"quizMaxQuestionsSelector",(function(){return K})),n.d(a,"quizGetCurrentQuestionSelector",(function(){return G})),n.d(a,"quizPointsSelector",(function(){return H})),n.d(a,"quizReactionSelector",(function(){return V})),n.d(a,"quizSelectAnswerIdSelector",(function(){return $})),n.d(a,"quizIsEndSelector",(function(){return ee}));var s={};n.r(s),n.d(s,"initial",(function(){return ie})),n.d(s,"selectQuestion",(function(){return ce}));var l={};n.r(l),n.d(l,"quiz",(function(){return s}));var d={};n.r(d),n.d(d,"Title",(function(){return de})),n.d(d,"Description",(function(){return Ee}));var f=n(0),m=n.n(f),E=n(13),I=n.n(E),p=n(3),b=n(10),Q=n(9),q=n(28),z=n(30),h=n(31),_="quiz",x=500,O="/",N="/quiz",A="/result",v="QUIZ_INITIAL",C="QUIZ_NEXT_QUESTION",S="QUIZ_CORRECT_ANSWER",T="QUIZ_INCORRECT_ANSWER",R="QUIZ_END",j=n(11),g=[{id:"dfsdfdfbvsfbrt44478541",title:"Hello (General greeting)",answers:[{id:0,text:"Mucho gusto",correct:!1},{id:1,text:"\xa1Hola!",correct:!0},{id:2,text:"Adi\xf3s",correct:!1},{id:3,text:"\xa1Salud!",correct:!1}]},{id:"qwrerr2354ghnj",title:"Good morning",answers:[{id:0,text:"Buenos d\xedas",correct:!0},{id:1,text:"Buenas tardes",correct:!1},{id:2,text:"\xbfC\xf3mo se llama usted",correct:!1},{id:3,text:"Estoy bien",correct:!1}]},{id:"4rtbfgdhaetq34",title:"Thank you",answers:[{id:0,text:"\xa1Lo siento!",correct:!1},{id:1,text:"Grac\xedas",correct:!0},{id:2,text:"Comprendo",correct:!1},{id:3,text:"\xa1Alto!",correct:!1}]},{id:"ferf34r34t4bert5y",title:"What time is it?",answers:[{id:0,text:"\xbfQu\xe9 hora es?",correct:!0},{id:1,text:"\xbfCu\xe1nto cuesta?",correct:!1},{id:2,text:"\xbfQui\xe8n?",correct:!1},{id:3,text:"\xbfC\xf3mo est\xe1 usted?",correct:!1}]},{id:"24rrbrey45yhbdn12bf",title:"I love you",answers:[{id:0,text:"Te amo",correct:!0},{id:1,text:"Lo siento",correct:!1},{id:2,text:"Hasta luego",correct:!1},{id:3,text:"\xa1Divi\xe9rtete!",correct:!1}]}],w={questions:g,currentQuestion:1,maxQuestions:g.length,points:0,reaction:"",selectAnswerId:"",isEndQuiz:!1};function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case c.QUIZ_INITIAL:return Object(j.a)({},e,{currentQuestion:1,points:0,reaction:"",selectAnswerId:"",isEndQuiz:!1});case c.QUIZ_CORRECT_ANSWER:return Object(j.a)({},e,{points:e.points+1,reaction:"success",selectAnswerId:r.id});case c.QUIZ_INCORRECT_ANSWER:return Object(j.a)({},e,{reaction:"error",selectAnswerId:r.id});case c.QUIZ_NEXT_QUESTION:return Object(j.a)({},e,{currentQuestion:e.currentQuestion+1,reaction:"",selectAnswerId:""});case c.QUIZ_END:return Object(j.a)({},e,{isEndQuiz:!0});default:return e}}var U=function(e){return Object(Q.combineReducers)({router:Object(b.b)(e),quiz:y})},Z=n(7),D=Object(Z.a)(),M=Object(h.composeWithDevTools)({name:r.NAME_APPLICATION}),W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(Q.createStore)(U(D),e,M(Object(Q.applyMiddleware)(Object(q.a)(D),z.a)))},P=n(2),X=n(8),L=function(e){return e},B=u,k=function(e){return e.quiz.currentQuestion},Y=Object(X.a)((function(e){return e.quiz}),B.getIdentifier),F=Object(X.a)((function(e){return e.quiz.questions}),B.getIdentifier),J=Object(X.a)(k,B.getIdentifier),K=Object(X.a)((function(e){return e.quiz.maxQuestions}),B.getIdentifier),G=Object(X.a)(F,k,(function(e,t){return e[t-1]})),H=Object(X.a)((function(e){return e.quiz.points}),B.getIdentifier),V=Object(X.a)((function(e){return e.quiz.reaction}),B.getIdentifier),$=Object(X.a)((function(e){return e.quiz.selectAnswerId}),B.getIdentifier),ee=Object(X.a)((function(e){return e.quiz.isEndQuiz}),B.getIdentifier),te=a,ne=te.quizNumberQuestionSelector,re=te.quizMaxQuestionsSelector,ie=function(){return{type:c.QUIZ_INITIAL}},ce=function(e){return function(t,n){var o=e.id,u=e.correct,a=re(n()),s=ne(n());t(u?{type:c.QUIZ_CORRECT_ANSWER,payload:{id:o}}:{type:c.QUIZ_INCORRECT_ANSWER,payload:{id:o}});var l=setTimeout((function(){return clearTimeout(l),s>=a?(t({type:c.QUIZ_END}),t(Object(P.d)(i.result))):t({type:c.QUIZ_NEXT_QUESTION})}),r.DELAY_TIMER)}},oe=n(5),ue=n(4),ae=n.n(ue),se=(n(50),n(23)),le=n.n(se),de=function(e){var t=e.mode,n=e.text,r=e.children;return m.a.createElement("div",{className:ae()(le.a.title,le.a[t])},n||r)},fe=n(24),me=n.n(fe),Ee=function(e){var t=e.text,n=e.children,r=e.color,i=e.isInline,c={className:ae()(me.a.description,me.a[r])};return i?m.a.createElement("span",c,t||n):m.a.createElement("p",c,t||n)},Ie=d,pe=n(32),be=n.n(pe),Qe=function(){return m.a.createElement("footer",{className:be.a.footer},m.a.createElement(Ie.Description,{text:"Quiz by Alex"}))},qe=n(17),ze=n.n(qe),he=function(e){var t=e.centerContent,n=e.children;return m.a.createElement("section",{className:ze.a.wrapper},m.a.createElement("main",{className:ae()(ze.a.content,t&&ze.a.centerContent)},n),m.a.createElement(Qe,null))},_e=n(16),xe=n(15),Oe=n.n(xe),Ne=n(33),Ae=n.n(Ne),ve=function(e){var t=e.text,n=e.children,r=e.mode,i=Object(_e.a)(e,["text","children","mode"]);return m.a.createElement("button",Object.assign({className:ae()(Ae.a.button,Oe.a[r])},i),t||n)},Ce=n(34),Se=n.n(Ce),Te=function(e){var t=e.text,n=e.children,r=e.mode,i=e.href,c=Object(_e.a)(e,["text","children","mode","href"]),o=Object(p.d)(),u=Object(f.useCallback)((function(e){e.preventDefault(),o(Object(P.d)(i))}),[o,i]);return m.a.createElement("a",Object.assign({href:i,className:ae()(Se.a.button,Oe.a[r]),onClick:u},c),t||n)},Re=n(35),je=n.n(Re),ge=o.routes,we=function(){return m.a.createElement(he,{centerContent:!0},m.a.createElement("div",{className:je.a.container},m.a.createElement(Ie.Title,{mode:"h1"},"Hello!"),m.a.createElement(Te,{href:ge.quiz},"let's start to play!")))},ye=n(36),Ue=n.n(ye),Ze=n(25),De=n.n(Ze),Me=function(e){var t=e.action,n=e.answer;return Ue.a.memoize((function(e){e.preventDefault(),t(n)}))},We={initialAction:l.quiz.initial,selectQuestionAction:l.quiz.selectQuestion},Pe=Object(p.c)((function(e){return{currentQuestion:te.quizGetCurrentQuestionSelector(e),numberQuestion:te.quizNumberQuestionSelector(e),maxQuestions:te.quizMaxQuestionsSelector(e),reaction:te.quizReactionSelector(e),selectAnswerId:te.quizSelectAnswerIdSelector(e)}}),We)((function(e){var t=e.currentQuestion,n=t.title,r=t.answers,i=e.numberQuestion,c=e.maxQuestions,o=e.reaction,u=e.selectAnswerId,a=e.selectQuestionAction,s=e.initialAction;return Object(f.useEffect)((function(){s()}),[s]),m.a.createElement(he,{centerContent:!0},m.a.createElement("div",{className:De.a.container},m.a.createElement(Ie.Title,{mode:"h1"},"Quiz!"),m.a.createElement(Ie.Title,{mode:"h2"},"Question ",i," of ",c),m.a.createElement(Ie.Title,{mode:"h3"},n),m.a.createElement("div",{className:De.a.buttons},r.map((function(e){return m.a.createElement(ve,{key:e.id,onClick:Me({action:a,answer:e}),mode:e.id===u?o:""},e.text)})))))})),Xe=n(37),Le=n.n(Xe),Be=o.routes,ke=Object(p.c)((function(e){return{points:te.quizPointsSelector(e),quizIsEnd:te.quizIsEndSelector(e)}}))((function(e){var t=e.quizIsEnd,n=e.points;return m.a.createElement(he,{centerContent:!0},m.a.createElement("div",{className:Le.a.container},t?m.a.createElement(f.Fragment,null,m.a.createElement(Ie.Title,{mode:"h1"},"You were finished quiz!"),m.a.createElement(Ie.Description,null,"You scored ",n," points"),m.a.createElement("br",null),m.a.createElement(Te,{href:Be.quiz},"try again!")):m.a.createElement(f.Fragment,null,m.a.createElement(Ie.Title,{mode:"h1"},"If you want to see a result you should finish the quiz"),m.a.createElement("br",null),m.a.createElement(Te,{href:Be.quiz},"try to play if you're not a chick!"))))})),Ye=function(){return m.a.createElement("div",null,"Page not found...")},Fe=o.routes,Je=function(){return m.a.createElement(oe.c,null,m.a.createElement(oe.a,{strict:!0,exact:!0,path:Fe.index,component:we}),m.a.createElement(oe.a,{strict:!0,exact:!0,path:Fe.quiz,component:Pe}),m.a.createElement(oe.a,{strict:!0,exact:!0,path:Fe.result,component:ke}),m.a.createElement(oe.a,{component:Ye}))},Ke=W(),Ge=function(){return m.a.createElement(p.a,{store:Ke},m.a.createElement(b.a,{history:D},m.a.createElement(Je,null)))};I.a.render(m.a.createElement(Ge,null),document.querySelector("#root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.bdf2f6ee.chunk.js.map