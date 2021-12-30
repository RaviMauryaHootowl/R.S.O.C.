(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[4],{116:function(e,n,t){"use strict";t.r(n);var r,c,i,o,s,a,b,j,d,l,x,O,u,h,p,m,g,f,w,v,y,k,S,I,F,E,A,C,R,D,M,T,H,z,V=t(24),U=t(2),P=t(0),W=t(48),B=t.n(W),L=t(49),N=t(3),G=t(10),q=t(1),$=N.b.div(r||(r=Object(U.a)(["\n\tfont-size: 22px;\n    display: flex;\n    align-items: center;\n    padding: 0 24px;\n"]))),J=N.b.img(c||(c=Object(U.a)(["\n    height: 36px;\n    margin-right: 12px;\n"]))),K=N.b.span(i||(i=Object(U.a)(["\n\t@media(max-width: 600px){\n\t\tdisplay: none;\n\t}\n"]))),_=function(){return Object(q.jsxs)($,{children:[Object(q.jsx)(J,{src:G.a}),Object(q.jsx)(K,{children:"R. S. O. C."})]})},Q=t(103),X=t.n(Q),Y=t(104),Z=t.n(Y),ee=t(71),ne=t.n(ee),te=(t(79),t(80),t(28)),re=t(34),ce=t(38),ie=(t(81),function(e){Object(re.a)(t,e);var n=Object(ce.a)(t);function t(){var e;return Object(te.a)(this,t),(e=n.call(this)).$rules={start:[{token:"comments",regex:/^~.*$/},{token:"tags",regex:/:.*$/},{token:"commands",regex:/(?:SET|ADD|SUB|MUL|DIV|INR|DCR|SHOW|IFG|IFL|IFE|IFN|JUMP|SKIP)\b/,caseInsensitive:!0},{token:"numbers",regex:/[0-9]+\b/}]},e}return t}(window.ace.acequire("ace/mode/text_highlight_rules").TextHighlightRules)),oe=function(e){Object(re.a)(t,e);var n=Object(ce.a)(t);function t(){var e;return Object(te.a)(this,t),(e=n.call(this)).HighlightRules=ie,e}return t}(window.ace.acequire("ace/mode/text").Mode),se=Object(N.b)(ne.a)(o||(o=Object(U.a)(["\n    width: 100%;\n"]))),ae=function(e){var n=e.codeValue,t=e.setCodeValue,r=Object(P.useRef)(null);Object(P.useEffect)((function(){var e=new oe;null!=r.current&&(console.log(r),r.current.editor.session.setMode(e))}),[r.current]);var c=Object(P.useState)({x:window.innerWidth,y:window.innerHeight}),i=Object(V.a)(c,2),o=i[0],s=i[1],a=function(){return s({x:window.innerWidth,y:window.innerHeight})};return Object(P.useEffect)((function(){return window.onresize=a}),[]),Object(q.jsx)(se,{ref:r,mode:"text",theme:"monokai",editorProps:{$blockScrolling:!0},showPrintMargin:!1,setOptions:{fontFamily:"monospace"},fontSize:null!=o.x&&o.x<600?20:25,value:n,height:"100%",onChange:function(e){t(e.toUpperCase())},style:{width:"100%",borderRadius:"8px"}})},be=t(82),je=t.n(be),de=t(84),le=t.n(de),xe=N.b.div(s||(s=Object(U.a)(["\n    width: 100%;\n    height: 100%;\n    border-radius: 8px;\n    padding: 8px;\n    display: flex;\n    flex-direction: row;\n    align-items: stretch;\n    @media(max-width: 600px){\n        flex-direction: column;\n\t}\n"]))),Oe=N.b.div(a||(a=Object(U.a)(["\n    flex: 3;\n    padding-right: 1rem;\n    @media(max-width: 600px){\n        padding-right: 0;\n        flex: 3;\n        padding-bottom: 1rem;\n\t}\n"]))),ue=N.b.div(b||(b=Object(U.a)(["\n    background-color: #2c2c2c;\n    border-radius: 8px;\n    flex: 2;\n    display: flex;\n    flex-direction: column;\n    padding: 12px;\n    overflow: auto;\n    @media(max-width: 600px){\n        flex: 2;\n\t}\n"]))),he=N.b.div(j||(j=Object(U.a)(["\n    flex: 1;\n    width: 100%;\n    overflow-y: auto;\n    &::-webkit-scrollbar {\n        width: 10px;\n    }\n    &::-webkit-scrollbar-track {\n        background: #2e2e2e;\n    }\n    &::-webkit-scrollbar-thumb {\n        background: #575757;\n        border-radius: 10px;\n    }\n    &::-webkit-scrollbar-thumb:hover {\n        background: #787878;\n    }\n"]))),pe=N.b.span(d||(d=Object(U.a)(["\n    color: white;\n    font-size: 2rem;\n    white-space: pre-wrap;\n    font-family: monospace;\n    @media(max-width: 600px){\n        font-size: 1.2rem;\n\t}\n"]))),me=N.b.div(l||(l=Object(U.a)(["\n    width: 100%;\n    background: #474747;\n    padding: 12px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    border-radius: 8px;\n    margin-top: 8px;\n"]))),ge=Object(N.b)(je.a)(x||(x=Object(U.a)(["\n    color: #ee5847;\n    margin-right: 8px;\n"]))),fe=Object(N.b)(le.a)(O||(O=Object(U.a)(["\n    color: #8b8b8b;\n    margin-left: 8px;\n    cursor: pointer;\n"]))),we=N.b.div(u||(u=Object(U.a)(["\n    color: white;\n    flex: 1;\n"]))),ve=function(e){var n=e.errorMessage,t=e.setIsError;return Object(q.jsxs)(me,{children:[Object(q.jsx)(ge,{fontSize:"large"}),Object(q.jsx)(we,{children:n}),Object(q.jsx)(fe,{onClick:function(){t(!1)}})]})},ye=function(e){var n=e.codeValue,t=e.setCodeValue,r=e.outputValue,c=e.isError,i=e.setIsError,o=e.errorMessage;return Object(q.jsxs)(xe,{children:[Object(q.jsx)(Oe,{children:Object(q.jsx)(ae,{codeValue:n,setCodeValue:t})}),Object(q.jsxs)(ue,{children:[Object(q.jsx)(he,{children:Object(q.jsx)(pe,{children:"".concat(r)})}),c&&Object(q.jsx)(ve,{setIsError:i,errorMessage:o})]})]})},ke=t(85),Se=t.n(ke),Ie=N.b.div(h||(h=Object(U.a)(["\n\tbackground-color: #252525;\n    border-radius: 20px;\n    width: 100%;\n    height: 100%;\n    box-shadow: rgba(26, 26, 26, 0.596) 4px 4px 10px;\n    display: flex;\n    flex-direction: column;\n"]))),Fe=N.b.div(p||(p=Object(U.a)(["\n\twidth: 100%;\n    height: 70px;\n    display: flex;\n    flex-direction: row;\n    align-items: stretch;\n    color: white;\n\tfont-family: 'Readex Pro', sans-serif;\n"]))),Ee=N.b.div(m||(m=Object(U.a)(["\n\tflex: 1;\n\tdisplay: flex;\n\talign-items: center;\n"]))),Ae=N.b.button(g||(g=Object(U.a)(["\n\tbackground-color: transparent;\n\tcolor: white;\n\toutline: none;\n\tborder: none;\n\tfont-size: 22px;\n    display: flex;\n    align-items: center;\n    padding: 0 24px;\n    cursor: pointer;\n\t&:hover{\n\t\tbackground-color: rgb(73, 73, 73);\n\t}\n\t\n"]))),Ce=N.b.span(f||(f=Object(U.a)(["\n\t@media(max-width: 600px){\n\t\tdisplay: none;\n\t}\n"]))),Re=N.b.button(w||(w=Object(U.a)(["\n\tbackground-color: transparent;\n\tcolor: white;\n\toutline: none;\n\tborder: none;\n\tfont-size: 22px;\n    display: flex;\n    align-items: center;\n    padding: 0 24px;\n    border-radius: 0 20px 0 0;\n    cursor: pointer;\n\t&:hover{\n\t\tbackground-color: rgb(73, 73, 73);\n\t}\n"]))),De=N.b.span(v||(v=Object(U.a)(["\n\t@media(max-width: 600px){\n\t\tdisplay: none;\n\t}\n"]))),Me=N.b.div(y||(y=Object(U.a)(["\n\twidth: 100%;\n    flex: 1;\n\toverflow-y: hidden;\n\tpadding: 12px;\n"]))),Te=Object(N.b)(X.a)(k||(k=Object(U.a)(["\n\tmargin-right: 10px;\t\n"]))),He=Object(N.b)(Z.a)(S||(S=Object(U.a)(["\n\tmargin-right: 10px;\n"]))),ze=function(e){var n=e.setIsTutOpen,t=Object(P.useState)(""),r=Object(V.a)(t,2),c=r[0],i=r[1],o=Object(P.useState)(""),s=Object(V.a)(o,2),a=s[0],b=s[1],j=Object(P.useState)(!1),d=Object(V.a)(j,2),l=d[0],x=d[1],O=Object(P.useState)(""),u=Object(V.a)(O,2),h=u[0],p=u[1];Object(P.useEffect)((function(){console.log(c)}),[c]);var m=function(){var e=Object(L.a)(B.a.mark((function e(){var n,t,r;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={code:c},e.next=3,Se.a.post("api/run",n);case 3:t=e.sent,r=t.data,console.log(r),"done"==r.status?(b(r.output),x(!1),p("")):(b("Oops!"),x(!0),p("Error: ".concat(r.message)));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(q.jsxs)(Ie,{children:[Object(q.jsxs)(Fe,{children:[Object(q.jsx)(Ee,{children:Object(q.jsx)(_,{})}),Object(q.jsxs)(Ae,{onClick:function(){n(!0)},children:[Object(q.jsx)(He,{}),Object(q.jsx)(Ce,{children:"Tutorial"})]}),Object(q.jsxs)(Re,{onClick:function(){m()},children:[Object(q.jsx)(Te,{}),Object(q.jsx)(De,{children:"Run"})]})]}),Object(q.jsx)(Me,{children:Object(q.jsx)(ye,{codeValue:c,setCodeValue:i,outputValue:a,isError:l,errorMessage:h,setIsError:x})})]})},Ve=t(105),Ue=t.n(Ve),Pe=N.b.div(I||(I=Object(U.a)(["\n    width: 100%;\n    height: 100%;\n    padding: 12px;\n    font-family: 'Readex Pro', sans-serif;\n    overflow-y: auto;\n"]))),We=N.b.div(F||(F=Object(U.a)(["\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n"]))),Be=N.b.button(E||(E=Object(U.a)(["\n    outline: none;\n    border: none;\n    cursor: pointer;\n    background-color: transparent;\n    color: white;\n"]))),Le=N.b.div(A||(A=Object(U.a)(["\n    font-size: 2rem;\n    color: white;\n    margin-bottom: 10px;\n"]))),Ne=N.b.div(C||(C=Object(U.a)(["\n    font-size: 1.6rem;\n    color: #ffbc51;\n    margin-bottom: 6px;\n"]))),Ge=N.b.div(R||(R=Object(U.a)(["\n    font-size: 1.1rem;\n    color: white;\n"]))),qe=N.b.div(D||(D=Object(U.a)(["\n    height: 16px;\n"]))),$e=N.b.div(M||(M=Object(U.a)(["\n    width: 100%;\n    margin: 6px 0;\n    \n"]))),Je=N.b.div(T||(T=Object(U.a)(["\n    background-color: #111111;\n    color: #bcffc1;\n    padding: 6px;\n    border-radius: 6px;\n"]))),Ke=function(e){var n=e.title,t=e.code;return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(Ge,{children:n}),Object(q.jsx)(_e,{children:t}),Object(q.jsx)(qe,{})]})},_e=function(e){var n=e.children;return Object(q.jsx)($e,{children:Object(q.jsx)(Je,{children:n})})},Qe=function(e){var n=e.setIsTutOpen;return Object(q.jsxs)(Pe,{children:[Object(q.jsxs)(We,{children:[Object(q.jsx)(Le,{children:"R.S.O.C. Tutorial"}),Object(q.jsx)(Be,{onClick:function(){n(!1)},children:Object(q.jsx)(Ue.a,{})})]}),Object(q.jsx)(Ne,{children:"Architecture"}),Object(q.jsxs)(Ge,{children:[Object(q.jsx)("li",{children:"R.S.O.C. comes with a memory size of 65536 locations and 7 Registers(A-G)"}),Object(q.jsx)("li",{children:"Memory is represented within M() Eg. M(2000H)"}),Object(q.jsx)("li",{children:"This denotes memory location with hex index of 2000"}),Object(q.jsx)("li",{children:"Registers are represented by their letter which ranges from A to G"})]}),Object(q.jsx)(qe,{}),Object(q.jsx)(Ne,{children:"Instruction Set"}),Object(q.jsx)(Ke,{title:Object(q.jsx)(q.Fragment,{children:"1. SET : Used to set a memory or register from another memory, register or data."}),code:Object(q.jsxs)(q.Fragment,{children:["SET A, B",Object(q.jsx)("br",{}),"SET A, 20",Object(q.jsx)("br",{}),"SET M(2001H), 40",Object(q.jsx)("br",{})]})}),Object(q.jsx)(Ke,{title:Object(q.jsx)(q.Fragment,{children:"2. SHOW: Used to print the value of a memory or register."}),code:Object(q.jsxs)(q.Fragment,{children:["SHOW A",Object(q.jsx)("br",{}),"SHOW M(2000H)"]})}),Object(q.jsx)(Ke,{title:Object(q.jsx)(q.Fragment,{children:"3. SKIP: Empty and Useless line just like your life (jk)"}),code:Object(q.jsx)(q.Fragment,{children:"SKIP"})}),Object(q.jsx)(Ke,{title:Object(q.jsx)(q.Fragment,{children:"4. ADD, SUB, MUL, DIV: Performs arithmetics on two numbers and stores into A Register (Accumulator)"}),code:Object(q.jsxs)(q.Fragment,{children:["ADD A, B",Object(q.jsx)("br",{}),"ADD C, M(2000H)",Object(q.jsx)("br",{}),"ADD 30, 40",Object(q.jsx)("br",{}),"SUB A, B",Object(q.jsx)("br",{}),"MUL B, C",Object(q.jsx)("br",{}),"DIV C, D"]})}),Object(q.jsx)(Ke,{title:Object(q.jsx)(q.Fragment,{children:"5. INR/DCR: Used to Increment or Decrement value"}),code:Object(q.jsxs)(q.Fragment,{children:["INR A",Object(q.jsx)("br",{}),"DCR M(1000H)"]})}),Object(q.jsx)(Ke,{title:Object(q.jsxs)(q.Fragment,{children:["6. IFG: If greater conditional jump to a label.",Object(q.jsx)("br",{}),"Eg. Here since A is greater than 10 it jumps to jumptag label",Object(q.jsx)("br",{}),"Similarly, IFL: If Less, IFE: If Equal, IFN: If Not Equal"]}),code:Object(q.jsxs)(q.Fragment,{children:["SET A, 20",Object(q.jsx)("br",{}),"IFG A, 10, jumptag",Object(q.jsx)("br",{}),"...",Object(q.jsx)("br",{}),"...",Object(q.jsx)("br",{}),"SHOW A : jumptag",Object(q.jsx)("br",{})]})}),Object(q.jsx)(Ke,{title:Object(q.jsx)(q.Fragment,{children:"7. Comments: These are represented by ~ (tilde) symbol which is also the logo of R.S.O.C."}),code:Object(q.jsxs)(q.Fragment,{children:["SET A, 20",Object(q.jsx)("br",{}),"~ This is a comment line",Object(q.jsx)("br",{}),"SHOW A"]})})]})},Xe=t(106),Ye=N.b.div(H||(H=Object(U.a)(["\n    width: 100%;\n    height: 100vh;\n    background-color: #d8d8d8;\n    padding: 20px;\n    position: relative;\n"]))),Ze=Object(N.b)(Xe.animated.div)(z||(z=Object(U.a)(["\n    z-index: 10;\n    background-color: #313131;\n    position: absolute;\n    width: 40%;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    box-shadow: #35353540 -2px 0px 20px;\n    border-left: 6px solid #5c5c5c;\n    @media(max-width: 600px){\n        width: 80%;\n\t}\n    @media(max-width: 500px){\n        width: 90%;\n\t}\n"])));n.default=function(){var e=Object(P.useState)(!1),n=Object(V.a)(e,2),t=n[0],r=n[1],c=Object(Xe.useTransition)(t,{from:{x:250,y:0,opacity:0},enter:{x:0,y:0,opacity:1},leave:{x:250,y:0,opacity:0}});return Object(q.jsxs)(Ye,{children:[Object(q.jsx)(ze,{setIsTutOpen:r}),c((function(e,n){return n&&Object(q.jsx)(Ze,{style:e,children:Object(q.jsx)(Qe,{setIsTutOpen:r})})}))]})}}}]);
//# sourceMappingURL=4.8c76c25f.chunk.js.map