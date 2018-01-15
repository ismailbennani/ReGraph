Search.setIndex({docnames:["attribute_sets","exceptions","hierarchy","index","modules","primitives","rules","tutorial1","tutorial2"],envversion:53,filenames:["attribute_sets.rst","exceptions.rst","hierarchy.rst","index.rst","modules.rst","primitives.rst","rules.rst","tutorial1.rst","tutorial2.rst"],objects:{"regraph.attribute_sets":{AttributeSet:[0,1,1,""],EmptySet:[0,1,1,""],FiniteSet:[0,1,1,""],IntegerSet:[0,1,1,""],RegexSet:[0,1,1,""],UniversalSet:[0,1,1,""]},"regraph.attribute_sets.AttributeSet":{difference:[0,2,1,""],from_json:[0,3,1,""],intersect:[0,2,1,""],issubset:[0,2,1,""],union:[0,2,1,""]},"regraph.attribute_sets.EmptySet":{difference:[0,2,1,""],intersect:[0,2,1,""],is_empty:[0,2,1,""],is_universal:[0,2,1,""],issubset:[0,2,1,""],to_json:[0,2,1,""],union:[0,2,1,""]},"regraph.attribute_sets.FiniteSet":{add:[0,2,1,""],difference:[0,2,1,""],intersection:[0,2,1,""],is_empty:[0,2,1,""],is_universal:[0,2,1,""],issubset:[0,2,1,""],to_json:[0,2,1,""],union:[0,2,1,""],update:[0,2,1,""]},"regraph.attribute_sets.IntegerSet":{contains:[0,2,1,""],difference:[0,2,1,""],empty:[0,3,1,""],from_finite_set:[0,3,1,""],intersection:[0,2,1,""],is_empty:[0,2,1,""],is_universal:[0,2,1,""],issubset:[0,2,1,""],to_json:[0,2,1,""],union:[0,2,1,""],universal:[0,3,1,""]},"regraph.attribute_sets.RegexSet":{difference:[0,2,1,""],empty:[0,3,1,""],from_finite_set:[0,3,1,""],intersection:[0,2,1,""],is_empty:[0,2,1,""],is_universal:[0,2,1,""],issubset:[0,2,1,""],match:[0,2,1,""],to_json:[0,2,1,""],union:[0,2,1,""],universal:[0,3,1,""]},"regraph.attribute_sets.UniversalSet":{difference:[0,2,1,""],intersection:[0,2,1,""],is_empty:[0,2,1,""],is_universal:[0,2,1,""],issubset:[0,2,1,""],to_json:[0,2,1,""],union:[0,2,1,""]},"regraph.exceptions":{AttributeSetError:[1,4,1,""],FormulaError:[1,4,1,""],GraphAttrsWarning:[1,4,1,""],GraphError:[1,4,1,""],HierarchyError:[1,4,1,""],InvalidHomomorphism:[1,4,1,""],ParsingError:[1,4,1,""],ReGraphError:[1,4,1,""],ReGraphException:[1,4,1,""],ReGraphWarning:[1,4,1,""],RewritingError:[1,4,1,""],RuleError:[1,4,1,""],TotalityWarning:[1,4,1,""]},"regraph.hierarchy":{Hierarchy:[2,1,1,""]},"regraph.hierarchy.Hierarchy":{"export":[2,2,1,""],add_cycle:[2,2,1,""],add_graph:[2,2,1,""],add_relation:[2,2,1,""],add_rule:[2,2,1,""],add_rule_typing:[2,2,1,""],add_typing:[2,2,1,""],adjacent_relations:[2,2,1,""],apply_rule:[2,2,1,""],child_rule_from_nodes:[2,2,1,""],compose_path_typing:[2,2,1,""],descendents:[2,2,1,""],find_matching:[2,2,1,""],find_rule_matching:[2,2,1,""],from_json:[2,3,1,""],get_ancestors:[2,2,1,""],get_rule_typing:[2,2,1,""],get_typing:[2,2,1,""],graph_dict_factory:[2,5,1,""],graphs:[2,2,1,""],load:[2,3,1,""],merge_by_attr:[2,2,1,""],merge_by_id:[2,2,1,""],new_graph_from_nodes:[2,2,1,""],node_type:[2,2,1,""],rel_dict_factory:[2,5,1,""],relation_to_span:[2,2,1,""],relations:[2,2,1,""],remove_edge:[2,2,1,""],remove_node:[2,2,1,""],remove_relation:[2,2,1,""],rename_graph:[2,2,1,""],rename_node:[2,2,1,""],rewrite:[2,2,1,""],rule_dict_factory:[2,5,1,""],rule_lhs_typing_dict_factory:[2,5,1,""],rule_rhs_typing_dict_factory:[2,5,1,""],rules:[2,2,1,""],to_json:[2,2,1,""],to_nx_graph:[2,2,1,""],typing_dict_factory:[2,5,1,""],typings:[2,2,1,""],unique_graph_id:[2,2,1,""]},"regraph.primitives":{add_edge:[5,6,1,""],add_edge_attrs:[5,6,1,""],add_edges_from:[5,6,1,""],add_node:[5,6,1,""],add_node_attrs:[5,6,1,""],add_node_new_id:[5,6,1,""],add_nodes_from:[5,6,1,""],append_to_node_names:[5,6,1,""],clone_node:[5,6,1,""],copy_node:[5,6,1,""],equal:[5,6,1,""],exists_edge:[5,6,1,""],export_graph:[5,6,1,""],filter_edges_by_attributes:[5,6,1,""],find_matching:[5,6,1,""],find_matching_with_types:[5,6,1,""],get_edge:[5,6,1,""],get_relabeled_graph:[5,6,1,""],graph_from_json:[5,6,1,""],graph_to_json:[5,6,1,""],load_graph:[5,6,1,""],merge_nodes:[5,6,1,""],print_graph:[5,6,1,""],relabel_node:[5,6,1,""],relabel_nodes:[5,6,1,""],remove_edge:[5,6,1,""],remove_edge_attrs:[5,6,1,""],remove_node:[5,6,1,""],remove_node_attrs:[5,6,1,""],set_edge:[5,6,1,""],subtract:[5,6,1,""],unique_node_id:[5,6,1,""],update_edge_attrs:[5,6,1,""],update_node_attrs:[5,6,1,""]},"regraph.rules":{Rule:[6,1,1,""]},"regraph.rules.Rule":{added_edge_attrs:[6,2,1,""],added_edges:[6,2,1,""],added_node_attrs:[6,2,1,""],added_nodes:[6,2,1,""],apply_to:[6,2,1,""],cloned_nodes:[6,2,1,""],from_json:[6,3,1,""],from_transform:[6,3,1,""],inject_add_edge:[6,2,1,""],inject_add_edge_attrs:[6,2,1,""],inject_add_node:[6,2,1,""],inject_add_node_attrs:[6,2,1,""],inject_clone_node:[6,2,1,""],inject_merge_nodes:[6,2,1,""],inject_remove_edge:[6,2,1,""],inject_remove_edge_attrs:[6,2,1,""],inject_remove_node:[6,2,1,""],inject_remove_node_attrs:[6,2,1,""],inject_update_edge_attrs:[6,2,1,""],inject_update_node_attrs:[6,2,1,""],is_relaxing:[6,2,1,""],is_restrictive:[6,2,1,""],merged_nodes:[6,2,1,""],removed_edge_attrs:[6,2,1,""],removed_edges:[6,2,1,""],removed_node_attrs:[6,2,1,""],removed_nodes:[6,2,1,""],to_commands:[6,2,1,""],to_json:[6,2,1,""]},regraph:{attribute_sets:[0,0,0,"-"],exceptions:[1,0,0,"-"],hierarchy:[2,0,0,"-"],primitives:[5,0,0,"-"],rules:[6,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","classmethod","Python class method"],"4":["py","exception","Python exception"],"5":["py","attribute","Python attribute"],"6":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:classmethod","4":"py:exception","5":"py:attribute","6":"py:function"},terms:{"11841883_4":6,"13S":[],"1_3":7,"1_clone":7,"2_clone":[5,7],"5pm":[],"abstract":2,"boolean":[],"case":2,"class":[0,1,2,5,6,7],"default":[2,5,6,7],"export":[2,5],"final":7,"function":[2,3,5,7,8],"import":[5,7,8],"int":[0,7],"long":7,"new":[2,5,6,7,8],"return":[0,2,5,6],"static":7,"true":[0,2,5,6,7,8],"try":7,"while":2,Adding:[],And:5,But:[],For:[6,7],The:[0,2,3,5,7],Then:7,These:[6,7],Use:[],Uses:[2,5],Will:[],__iter__:[],__len__:[],__traceback__:[],_map:2,_modul:5,_pattern_typ:0,a_act:8,a_and_int:7,a_or_int:7,a_res_1:8,abl:5,about:[1,7,8],abov:[7,8],accommod:[2,8],accord:[],act:[],action:8,action_graph:8,activ:8,acycl:[2,8],add:[0,2,5,6,7,8],add_attr:[],add_cycl:2,add_edg:[5,8],add_edge_attr:[5,7],add_edge_rh:[],add_edges_from:[5,7,8],add_graph:[2,8],add_nod:5,add_node_attr:[5,7],add_node_attrs_rh:[],add_node_new_id:5,add_node_typ:[],add_nodes_from:[5,7,8],add_path:[],add_rel:[2,8],add_rul:2,add_rule_typ:2,add_star:[],add_typ:[2,8],add_weighted_edges_from:[],added:[2,6,7],added_edg:6,added_edge_attr:6,added_nod:6,added_node_attr:6,adding:2,addit:[2,6,7],addition:2,adj_it:[],adj_list:[],adjac:[5,7],adjacency_it:[],adjacency_list:[],adjacent_rel:2,adjlist_dict_factori:[],advanc:[3,8],after:0,afternoon:7,again:7,age:7,agent:8,algorithm:[2,5],alia:2,alic:7,all:[0,2,5,6,7,8],all_tot:[],allow:[3,6,7,8],along:2,alphanum:7,alreadi:[2,5,6],also:[2,5,6,7,8],altern:2,among:[],ancestor:2,ani:[0,2,7,8],anoth:[0,7,8],appear:[],append:5,append_to_node_nam:5,appli:[2,6,7],apply_rul:2,apply_to:[6,7],arbitrari:[],arg:0,argument:6,assign:5,associ:0,assum:[2,5],atset:7,attach:7,attempt:[],attr:[1,2,5,6,7],attr_cond:5,attr_dict:[],attr_kei:5,attrdict:[],attribur:[],attribut:[1,2,3,4,5,6,8],attribute_set:[0,5,7],attributecontaint:[],attributeset:[0,7],attributeseterror:[0,1,7],attrnam:[],attrs_cond:5,attrs_dict:5,attrs_from_json:[],attrs_kei:5,attrs_to_json:[],automat:[],b_activ:8,b_and_int:7,b_or_int:7,b_res_1:8,ba_map:5,back:[0,8],base:[0,1,2,3,7],becom:[1,7],behaviour:[0,7],behind:7,being:[0,5,6],below:[2,8],between:[0,2,5,6,7,8],binari:[2,8],blue:[2,5,7,8],bob:7,bool:[2,5,6],both:[3,6,7,8],build:2,bye:7,c_activ:[],call:8,callabl:5,can:[0,2,5,6,7,8],canon:6,capac:[],care:[],cast:0,catalysi:8,caus:7,chang:[2,3,8],chapter:6,check:[0,5,6,8],child_rule_from_nod:2,children:[],choic:[],classmethod:[0,2,6],clear:[],clearli:7,clone:[5,6,7],clone_nod:[5,7],clone_rhs_nod:[],cloned_nod:6,close:0,code:7,collect:[0,2,3,5,6,7],color:[5,7,8],com:[0,6,7],combin:[],command:[1,6],common:[0,2,7],commut:2,compar:5,complet:[],compon:[2,8],compos:2,compose_path_typ:2,comput:2,concaten:0,condit:[5,7],connect:[7,8],consid:[7,8],consist:[6,7],constrain:2,construct:[0,2,8],conta:2,contain:[0,2,3,5,6,7],contex:7,continu:7,contrast:[],control:[],conveni:[],convert:[0,2,6,7],copi:[0,5],copy_nod:5,correct:[],correspond:[0,2,5,6,7],corrupt:[],cosid:7,coupl:7,cover:8,creat:[0,2,5,6,7,8],creation:[3,7],custom:[],cycl:2,dag:2,data:[0,2,6,7],data_dictionari:[],datadict:[],datavalu:[],ddict:[],decr_typ:5,deep:[],deepcopi:[],defin:[0,2,3,5,6,7,8],definit:[],degre:[],degree_it:[],depend:7,descend:2,descent:2,describ:3,design:[],desir:[],detail:[0,7],dev:7,develop:5,dict:[0,1,2,5,6,7,8],dict_kei:7,dictionari:[0,2,5,6,7],dictionnari:5,diff:5,differ:[0,5,7],digraph:[2,5,7,8],direct:[2,3,5,7,8],directli:[],disjoint:[0,7],distinct:5,doc:[],document:5,doe:[2,5,6],doesn:[],domain:[],done:[7,8],dont:[],down:2,dump:7,duplic:[],dure:[3,5,6,7],each:[],ebunch:[],edg:[0,1,2,5,6,7,8],edge_attr_dict_factori:[],edge_dict:[],edge_ind:[],edge_it:[],edge_list:5,edge_method:5,edgelist:[],edges_it:[],effect:[],either:[2,5],element:[0,5,7],empti:[0,1,2,6,7,8],emptyset:[0,7],empyset:0,enabl:3,encapsul:[],encount:[],end:[],ensur:2,enzym:8,eqaul:5,equal:5,equip:[2,7],equival:[],error:[1,2,5],essenc:7,etc:7,even:[],everi:[2,5],evolut:3,exactli:6,exampl:[2,5,7,8],except:[3,4,5,7],exhaust:[],exist:[2,5,6],exists_edg:5,explicit:[],export_graph:5,express:[0,2,7,8],extrem:7,fail:[],fals:[0,2,5,6,7,8],faster:[],fastest:[],figur:8,file:[2,5],filenam:[2,5],filter:5,filter_edges_by_attribut:5,find:[0,2,5,6,7],find_match:[2,5,7],find_matching_with_typ:5,find_rule_match:2,finit:[0,7],finiteset:[0,7],first:[6,7,8],flag:[],follow:[0,2,5,6,7,8],forc:[],forget:2,form:2,format:2,formula:1,formulaerror:1,found:[0,2,5,6,7,8],framework:3,friend:7,from:[0,2,5,6,7,8],from_finite_set:0,from_json:[0,2,6],from_transform:[6,7],fset:0,fsm:0,g_prime:6,g_t_type:2,gene:8,gener:[2,3,5],get:[2,5,6],get_ancestor:2,get_edg:5,get_edge_data:[],get_relabeled_graph:5,get_rule_typ:2,get_typ:2,git:7,github:[0,5,7],give:[3,8],given:[0,2,5,6,7],going:6,grammar:6,graph1:5,graph2:5,graph:[0,1,2,3,5,6,8],graph_attr:2,graph_dict_factori:2,graph_from_json:5,graph_id:2,graph_node_cl:2,graph_to_json:[5,7],graph_typ:5,graph_typing_cl:2,graphattrswarn:1,grapherror:[1,5],graphmatch:[2,5],graphnod:2,graphrel:2,greeneri:0,hand:[2,6,7,8],handl:1,has:7,has_edg:[],has_nod:[],has_predecessor:[],has_successor:[],hash:[],hashabl:[2,5,6],have:[5,7,8],hello:7,help:6,here:[0,7,8],hierarchi:[1,3,4,7],hierarchyerror:[1,2],hierari:2,highlight:8,hold:[],homomorph:[1,2,6,8],hopefulli:7,how:8,html:5,http:[0,5,6,7],idea:7,ident:[],ids:[2,5,6],ignor:2,illustr:[7,8],imag:[2,5],immedi:2,implement:[0,2,5,6,7,8],impos:7,in_degre:[],in_degree_it:[],in_edg:[],in_edge_it:[],in_edges_it:[],incapsul:[],incid:[2,6,7],includ:0,inclus:[0,7],incom:[],index:3,indic:[],induc:[2,5],inf:7,infinit:[0,7],inform:[6,7],inherit:[0,2],initi:[6,7,8],inject:6,inject_add_edg:[6,7],inject_add_edge_attr:6,inject_add_nod:[6,7],inject_add_node_attr:6,inject_clone_nod:[6,7],inject_merge_nod:6,inject_remove_edg:[6,7],inject_remove_edge_attr:6,inject_remove_nod:6,inject_remove_node_attr:6,inject_update_edge_attr:6,inject_update_node_attr:6,inplac:[2,5,6],input:[2,5,6],insid:[2,5],instal:[3,8],instanc:[0,2,5,6,7,8],instead:7,int_regex:7,integ:[0,7],integerset:[0,7],interfac:[0,7],interg:7,intersect:[0,5,7],interv:[0,7],interval_list:0,invalid:1,invalidhomomorph:[1,2],invok:7,is_direct:[],is_empti:0,is_multigraph:[],is_relax:6,is_restrict:6,is_tot:[],is_univers:0,isomorph:[2,5],issubset:[0,7],item:[],iter:[2,5,6],its:[0,2,5,6,7,8],itself:[2,6],j_data:5,john:7,json:[0,2,5,6,7],json_data:[0,2,6,7],just:8,kappa:7,keep:[],kei:[2,5,6,7],keyerror:[],keyword:[],label:5,last:7,later:[3,6],learn:7,left:[2,6,7],left_domain:[],left_h:2,lego:0,len:[],length:[],let:[7,8],level:[2,8],lhs:[2,6,7,8],lhs_homomorph:2,lhs_map:2,lhs_node_id:6,lhs_pair:[],lhs_total:2,lhs_type:2,librari:[0,3,7],like:[0,2,5,8],line:7,link:6,list:[0,2,5,6],load:[2,5],load_graph:5,longer:7,look:[5,8],loop:[],machin:0,mai:7,maintain:[],make:2,mani:[],manual:[],map:[2,5,6,7,8],matcch:7,match:[0,2,5,6,7],math:7,mathemat:[2,8],maxim:2,mayb:2,mean:[2,7,8],member:[],membership:[],merg:[2,5,6,7],merge3:[],merge_by_attr:2,merge_by_id:2,merge_nod:[5,7],merge_node_list:[],merge_nodes_rh:[],merged_nod:[5,6],method:[0,2,5,6,7],middl:[],miss:8,mmm:8,mod:8,mod_stat:8,model:[3,8],modul:[2,6,7],moral:0,more:[0,6],moreov:[2,5],morphism:2,multidigraph:[],multigraph:[],multipl:[],must:[],mutabl:[],name:[2,5,7],nbrdict:[],nbunch:[],nbunch_it:[],nd_iter:[],nedg:[],need:7,neighbor:[],neighbors_it:[],neither:[5,6],networkx:[2,3,5,6,7,8],networkxerror:[],never:0,new_graph:7,new_graph_from_nod:2,new_graph_id:2,new_hierarchi:2,new_id:5,new_nam:[2,5,6],new_nod:[5,7],new_node_id:6,new_rule1:7,next:7,niter:[],nlist:[],nloop:[],nnode:[],no_hi_by:7,node1:[],node2:[],node:[0,2,5,6,7,8],node_dict_factori:[],node_id:[2,5,6],node_list:[5,6],node_lust:6,node_nam:[],node_typ:[2,8],nodelist:[],nodes_it:[],nodes_with_selfloop:[],non:7,none:[0,2,5,6],nor:6,normal:[],note:[7,8],now:[7,8],ntersect:5,nugget_1:8,num:0,number:[],number_of_edg:[],number_of_nod:[],number_of_selfloop:[],numer:[],obj:6,object:[0,2,3,5,6,7],observ:8,obtain:[],ofpropag:2,old:[5,6],old_nam:[],onc:[],one:[2,5,6,7,8],ones:[6,7],onli:[5,6,7],open:0,oper:7,option:[2,5,6],order:[6,7],ordinari:[0,7],org:[],origin:[2,5,7],other:[0,8],otherwis:[0,2,5,6],our:[7,8],out:[],out_degre:[],out_degree_it:[],out_edg:[],out_edges_it:[],outgo:[],output:[],over:[],overload:[],own:[],p_lh:[6,7],p_new_node_id:6,p_pair:[],p_rh:[6,7],packag:[5,6],page:3,pair:[],paramet:[0,2,5,6],parent:[],parent_po:7,pars:[0,1,6],parser:6,parsingerror:1,part:[2,3,6],partial:[1,2],particular:8,path:2,pattern:[0,2,5,6,7,8],pattern_typ:[2,5],peform:8,perform:[6,7],place:6,platform:[],plot:[7,8],plot_graph:[7,8],plot_inst:[7,8],plot_rul:[7,8],point:[],pos:7,positive_integ:7,possibl:[0,7],potenti:7,preced:[],predecessor:[2,8],predecessors_it:[],prefix:[2,5],preform:6,prepend:5,presenc:7,present:[6,7],preserv:[2,3,5,6,7],presev:[6,7],pretti:5,previou:8,previous:7,primit:[1,3,4,6,8],primitv:6,print:5,print_graph:5,problem:[2,5],procedur:[2,3,6,8],process:2,produc:[2,6,7],propag:[2,3,8],propagation_in_hierarchi:7,properti:2,protein:8,provid:[0,2,3,5,6,7,8],pushout:[2,3,6,7],put:5,python:[0,5,7],qntm:0,quietli:[],r_g_prime:2,rais:[0,2,5,6],rang:[],readabl:7,real:0,realset:0,reciproc:[],recogn:[0,6],reconnect:[2,5,8],recurs:2,red:[2,5,7,8],reduc:0,reduct:[],refer:7,reflect:7,regex:[0,7],regexp:0,regexset:[0,7],region:8,regraph:[0,1,2,5,6,7,8],regraph_tmp_typings_key_that_you_should_not_us:5,regrapherror:[1,2,5],regraphexcept:1,regraphwarn:1,regular:[0,7],rel:2,rel_dict_factori:2,rel_pair:[],relabel:5,relabel_nod:5,relabl:5,relat:[0,2,6,8],relation_cl:2,relation_dict:[],relation_dict_factori:[],relation_to_span:2,relax:6,relev:[],remov:[2,5,6,7,8],remove_attr:[],remove_edg:[2,5],remove_edge_attr:[5,7],remove_edge_p:[],remove_edge_rh:[],remove_edges_from:[],remove_graph:[],remove_nod:[2,5,8],remove_node_attr:[5,7],remove_node_attrs_p:[],remove_node_attrs_rh:[],remove_node_rh:[],remove_node_typ:[],remove_nodes_from:[],remove_rel:2,removed_edg:6,removed_edge_attr:6,removed_nod:6,removed_node_attr:6,renam:2,rename_graph:2,rename_nod:2,rename_sourc:[],rename_target:[],replac:6,repositori:7,repr:6,repres:[2,5,6,7,8],represen:[0,2],represent:[0,2,5,6,7],represet:[],request:[],requir:[],residu:8,respect:[2,5,6],restict:6,restrict:6,result:[0,5,6,7],retreiv:[],retriev:[],retur:7,revers:2,rewrit:[1,2,3,6],rewritingerror:[1,2,8],rhs:[2,6,7,8],rhs_g_prime:6,rhs_homomorph:2,rhs_instanc:[7,8],rhs_map:2,rhs_new_node_id:6,rhs_pair:[],rhs_total:2,rhs_type:[2,8],right:[2,6,7,8],right_domain:[],right_h:2,robust:[2,8],routin:[],rule1:7,rule:[1,2,3,4,8],rule_attr:2,rule_dict_factori:2,rule_id:2,rule_lhs_typing_dict_factori:2,rule_node_cl:2,rule_rhs_typing_dict_factori:2,rule_typ:2,rule_typing_cl:2,ruleerror:[1,6],rulenod:2,rulerel:[],ruletyp:2,safe:[],same:[2,6,7],satisfi:[5,7],save:5,script:[6,8],search:[2,3,5],second:7,section:[7,8],see:[0,2,6,8],seen:[7,8],select:[],self:0,selfloop:[],selfloop_edg:[],separ:[],sequenc:[],serial:[5,7],sesqui:[2,3,6,7],set:[1,2,3,4,5,6,7,8],set_edg:5,setup:7,shallow:[],should:[2,5,6],side:[2,6,7,8],silent:[],similar:[5,8],simpl:[0,2,3,6,8],simpler:[],simpli:[],simplifi:6,singl:8,singleton:[],size:5,smth:6,solv:[2,5],some:[0,2,5,6,7],sort:0,sourc:[0,1,2,5,6],span:2,special:7,specif:3,specifi:[2,3,5,6,7],springer:6,ssh:7,stai:[6,7],standard:7,star:[],start:[2,5,8],state:[0,8],store:5,str:[0,5,6],strict:[2,8],string:[0,7],strong_typ:2,structur:[0,2,3,6,7],subclass:[],subdictionari:[2,5],subdictiotari:[2,5],subgraph:[2,5],subject:[2,6,7,8],subragh:[2,5],subrul:2,subset:[0,2,5,7],substrat:8,subtract:[5,7],successfulli:8,successor:[2,8],successors_it:[],sum:[],suppos:5,symmetr:[2,6,7,8],syntax:[],system:[2,3,8],take:[2,5,6],target:[2,5,6],test:[0,7],thats:6,thei:[],them:[2,5,6,7],theoret:7,thi:[0,2,3,5,6,7,8],those:[],though:[],thought:2,three:[6,7,8],through:[2,6,8],time:2,titl:8,to_command:6,to_direct:[],to_json:[0,2,6],to_nx_graph:2,to_tot:[],to_undirect:[],todo:[0,2],togeth:[6,7],token:5,tool:3,total:2,totalitywarn:1,transfer:[],transform:[1,3,5,6,8],transit:[2,8],tri:6,trigger:8,tupl:[2,5],twice:[],two:[0,2,5,6,7,8],type:[0,2,3,5,7,8],typing_dict:[],typing_dict_factori:2,typing_graph:5,under:2,undirect:[2,3,7],unio:7,union:[0,5,7],uniqu:5,unique_graph_id:2,unique_node_id:5,univ:7,univers:0,universalset:[0,7],unknown:5,unpack:[],updat:[0,5,6,8],update_attr:[],update_edge_attr:5,update_node_attr:5,usag:7,use:[],usecas:8,used:[0,6],user:3,userwarn:[],uses:0,using:[7,8],util:[3,5],utm:[],valid:2,valu:[0,2,5,6,7],variou:[3,5],version:3,view:3,wai:[0,6,7],warn:1,weight:[],well:[2,7],were:[5,8],when:6,where:[2,3,5,6,8],whether:[],which:[0,2,5,6,7,8],whose:[2,5,6,7],wiht:5,with_traceback:[],wn2898:[],word:7,work:7,workflow:7,would:[5,8],wrap:[0,7],wrapper:[0,7],yield:[],you:[5,7,8],your:7,zac:7,zip:[]},titles:["Attribute Sets","Exceptions","Hierarchy","Welcome to ReGraph\u2019s documentation!","Modules","Primitives","Rules","Tutorial","Tutorial"],titleterms:{advanc:7,attribut:[0,7],compon:[],creation:8,document:3,except:1,graph:7,hierarchi:[2,8],indic:3,instal:7,modul:[3,4],more:7,part:[7,8],primit:[5,7],propag:[],regraph:3,rewrit:[7,8],rule:[6,7],see:7,set:0,simpl:7,tabl:3,transform:7,tutori:[3,7,8],welcom:3}})