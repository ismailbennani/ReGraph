
var IRegraphHttpApi = require('i_regraph_http_api');

var api = new IRegraphHttpApi.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error.response.error.status + " : " + error.response.error.text);
  } else {
    console.log(response.status+" : data = "+JSON.stringify(data));
  }
};

var hierarchy_test={
  "name": "tyty",
  "top_graph": {
    "nodes": [
      {
        "id": "c",
        "type": "c" 
      },
      {
        "id": "b",
        "type": "b"
      },
      {
        "id": "a",
        "type": "a"
      }
    ],
    "edges": [
      {
        "to": "c",
        "from": "b",
        "attrs": {}
      },
      {
        "to": "b",
        "from": "a",
        "attrs": {}
      }
    ]
  },
  "children": [
    {
      "name": "subgraph2",
      "top_graph": {
        "nodes": [],
        "edges": []
      },
      "children": [
        {
          "name": "subgraph12",
          "top_graph": {
            "nodes": [],
            "edges": []
          },
          "children": []
        }
      ]
    },
    {
      "name": "subgraph1",
      "top_graph": {
        "nodes": [
          {
            "id": "z",
            "type": "b"
          },
          {
            "id": "y",
            "type": "b"
          },
          {
            "id": "x",
            "type": "a"
          }
        ],
        "edges": [
          {
            "to": "y",
            "from": "x",
            "attrs": {}
          }
        ]
      },
      "children": [
        {
          "name": "subgraph12",
          "top_graph": {
            "nodes": [],
            "edges": []
          },
          "children": [
            {
              "name": "toto",
              "top_graph": {
                "nodes": [],
                "edges": []
              },
              "children": []
            }
          ]
        }
      ]
    }
  ]
}
var hierarchy_test2={
  "name": "/",
  "top_graph": {
    "nodes": [
      {
        "id": "c",
        "type": ""
      },
      {
        "id": "b",
        "type": "" 
      },
      {
        "id": "a",
        "type": ""
      }
    ],
    "edges": [
      {
        "to": "c",
        "from": "b",
        "attrs": {}
      },
      {
        "to": "b",
        "from": "a",
        "attrs": {}
      }
    ]
  },
  "children": [
    {
      "name": "subgraph2",
      "top_graph": {
        "nodes": [],
        "edges": []
      },
      "children": [
        {
          "name": "subgraph12",
          "top_graph": {
            "nodes": [],
            "edges": []
          },
          "children": []
        }
      ]
    },
    {
      "name": "subgraph1",
      "top_graph": {
        "nodes": [
          {
            "id": "z",
            "type": "b"
          },
          {
            "id": "y",
            "type": "b"
          },
          {
            "id": "x",
            "type": "a"
          }
        ],
        "edges": [
          {
            "to": "y",
            "from": "x",
            "attrs": {}
          }
        ]
      },
      "children": [
        {
          "name": "subgraph12",
          "top_graph": {
            "nodes": [],
            "edges": []
          },
          "children": [
            {
              "name": "toto",
              "top_graph": {
                "nodes": [],
                "edges": []
              },
              "children": []
            }
          ]
        }
      ]
    }
  ]
};

api.graphgraphIdPost("/toto/",callback);
api.graphgraphIdPost("/tutu/",callback);
api.graphgraphIdPost("/toto/titi/",callback);
api.graphAddNodegraphIdPut("/toto/","a",null,callback);
api.graphAddNodegraphIdPut("/toto/","b",null,callback);
api.graphAddNodegraphIdPut("/toto/tutu/","x","a",callback);
api.graphAddNodegraphIdPut("/toto/titi/","x",{nodeType:"a"},callback);
api.graphAddNodegraphIdPut("/toto/titi/","y",{nodeType:"b"},callback);
api.graphAddNodegraphIdPut("/toto/titi/","y",{nodeType:"b"},callback);
api.graphAddEdgegraphIdPut("/toto/titi/", "x", "y", callback);
api.graphAddEdgegraphIdPut("/toto/titi/", "asdasdsadx", "y", callback);
api.graphAddEdgegraphIdPut("/toto/", "a", "b", callback);
api.graphAddEdgegraphIdPut("/toto/titi/", "x", "y", callback);
api.graphgraphIdGet("/toto",callback);
api.graphAddEdgegraphIdPut("/toto/titi/", "y", "x", callback);
api.graphgraphIdGet("/toto/titi/",callback);
api.graphgraphIdGet("/toto/titi///",callback);
api.graphgraphIdGet("/toto///titi///",callback);
api.hierarchyhierarchyPathGet("/",{},callback);
api.hierarchyhierarchyPathGet("/",{includeGraphs:true},callback);

h1 =  {"name":"/","children":[{"children":[],"name":"tutu","top_graph":{"edges":[],"nodes":[]}},{"children":[{"children":[],"name":"titi","top_graph":{"edges":[{"to":"y","attrs":{},"from":"x"}],"nodes":[{"id":"x","type":"a"},{"id":"y","type":"b"}]}}],"name":"toto","top_graph":{"edges":[{"to":"b","attrs":{},"from":"a"}],"nodes":[{"id":"b","type":""},{"id":"a","type":""}]}}]};
h2 =  {"name":"/","children":[{"children":[],"name":"test","top_graph":{"edges":[],"nodes":[]}},{"children":[{"children":[],"name":"titi","top_graph":{"edges":[{"to":"y","attrs":{},"from":"x"}],"nodes":[{"id":"x","type":"a"},{"id":"y","type":"b"}]}}],"name":"toto","top_graph":{"edges":[{"to":"b","attrs":{},"from":"a"}],"nodes":[{"id":"b","type":""},{"id":"a","type":""}]}}]};
h3 =  {"name":"/","children":[{"children":[],"name":"test","top_graph":{"edges":[],"nodes":[]}},{"children":[{"children":[],"name":"titi2","top_graph":{"edges":[{"to":"y","attrs":{},"from":"x"}],"nodes":[{"id":"x","type":"a"},{"id":"y","type":"b"}]}}],"name":"toto","top_graph":{"edges":[{"to":"b","attrs":{},"from":"a"}],"nodes":[{"id":"b","type":""},{"id":"a","type":""}]}}]};

api.hierarchyhierarchyPathPut("/", h1, callback);
api.hierarchyhierarchyPathPut("/", h2, callback);
api.hierarchyhierarchyPathPut("/", h3, callback);
api.hierarchyhierarchyPathGet("/",{includeGraphs:true},callback);

h4 =  {"children":[{"children":[],"name":"titi2","top_graph":{"edges":[{"to":"y","attrs":{},"from":"x"}],"nodes":[{"id":"x","type":"a"},{"id":"y","type":"b"}]}}],"name":"toadd","top_graph":{"edges":[{"to":"b","attrs":{},"from":"a"}],"nodes":[{"id":"b","type":""},{"id":"a","type":""}]}};
api.hierarchyhierarchyPathPost("/toadd/",h4,callback);
// api.graphgraphIdPost("/tutu/",callback);
// api.hierarchyhierarchyPathGet("/",{includeGraphs:true},callback);
api.graphValidateConstraintsgraphIdPut("/toto/titi/", callback);
api.graphAddConstraintgraphIdPut("/toto/","a","output","b","3","le",callback);
api.graphAddConstraintgraphIdPut("/toto/","a","output","b","2","ge",callback);
api.graphValidateConstraintsgraphIdPut("/toto/titi/", callback);
api.graphCloneNodegraphIdPut("/toto/titi/","y","y1");
api.graphValidateConstraintsgraphIdPut("/toto/titi/", callback);
api.graphCloneNodegraphIdPut("/toto/titi/","y","y2");
api.graphValidateConstraintsgraphIdPut("/toto/titi/", callback);
api.graphCloneNodegraphIdPut("/toto/titi/","y","y3");
api.graphValidateConstraintsgraphIdPut("/toto/titi/", callback);
api.graphgraphIdGet("/toto/",callback);
api.ruleruleIdPost("/r/", "toto", callback);
api.ruleAddNoderuleIdPut("/r/","added",{},callback);
api.ruleAddEdgeruleIdPut("/r/","added","a",callback);
api.ruleCloneNoderuleIdPut("/r/","a","a1",callback);
api.ruleMergeNoderuleIdPut("/r/","a","b","ab",callback);
api.ruleRmEdgeruleIdPut("/r/","added","ab",callback);
api.ruleCloneNoderuleIdPut("/r/","ab","ab1",callback);	
api.ruleRmNoderuleIdPut("/r/","ab",callback);

sos = 
{
	"name": "agrogroo",
	"top_graph": {
		"edges": [
			{
				"from": "ligand binding_0",
				"to": "EGF_3"
			},
			{
				"from": "ligand binding_0",
				"to": "l_2"
			},
			{
				"from": "ligand unbinding_1",
				"to": "EGF_3"
			},
			{
				"from": "ligand unbinding_1",
				"to": "l_2"
			},
			{
				"from": "EGFR dimerization_2",
				"to": "cr_5"
			},
			{
				"from": "EGFR dimerization_2",
				"to": "cr_5"
			},
			{
				"from": "EGFR unbind_3",
				"to": "cr_5"
			},
			{
				"from": "EGFR unbind_3",
				"to": "cr_5"
			},
			{
				"from": "Shc binds Grb2_4",
				"to": "a_6"
			},
			{
				"from": "Shc binds Grb2_4",
				"to": "sh2_7"
			},
			{
				"from": "Shc unbinds Grb2_5",
				"to": "a_6"
			},
			{
				"from": "Shc unbinds Grb2_5",
				"to": "sh2_7"
			},
			{
				"from": "EGFR binds Grb2_6",
				"to": "a_0"
			},
			{
				"from": "EGFR binds Grb2_6",
				"to": "sh2_7"
			},
			{
				"from": "EGFR unbinds Grb2_7",
				"to": "a_0"
			},
			{
				"from": "EGFR unbinds Grb2_7",
				"to": "sh2_7"
			},
			{
				"from": "EGFR binds Shc_8",
				"to": "b_1"
			},
			{
				"from": "EGFR binds Shc_8",
				"to": "PTB_0"
			},
			{
				"from": "EGFR unbinds Shc_9",
				"to": "b_1"
			},
			{
				"from": "EGFR unbinds Shc_9",
				"to": "PTB_0"
			},
			{
				"from": "Grb binds Sos_10",
				"to": "Sos_4"
			},
			{
				"from": "Grb binds Sos_10",
				"to": "SH3_2"
			},
			{
				"from": "Grb unbinds Sos_11",
				"to": "Sos_4"
			},
			{
				"from": "Grb unbinds Sos_11",
				"to": "SH3_2"
			},
			{
				"from": "EGFR internal binding_12",
				"to": "c_3"
			},
			{
				"from": "EGFR internal binding_12",
				"to": "n_4"
			},
			{
				"from": "EGFR internal unbinding_13",
				"to": "c_3"
			},
			{
				"from": "EGFR internal unbinding_13",
				"to": "n_4"
			},
			{
				"from": "pholation of EGFR@a_14",
				"to": "phosphorylation_0"
			},
			{
				"from": "pholation of EGFR@b_15",
				"to": "phosphorylation_1"
			},
			{
				"from": "depholation of EGFR@a_16",
				"to": "phosphorylation_0"
			},
			{
				"from": "depholation of EGFR@b_17",
				"to": "phosphorylation_1"
			},
			{
				"from": "pholation of Shc_18",
				"to": "phosphorylation_2"
			},
			{
				"from": "depholation of Shc_19",
				"to": "phosphorylation_2"
			}
		],
		"nodes": [
			{
				"id": "EGFR_0",
				"type": "agent_0"
			},
			{
				"id": "Grb2_1",
				"type": "agent_1"
			},
			{
				"id": "Shc_2",
				"type": "agent_2"
			},
			{
				"id": "EGF_3",
				"type": "agent_3"
			},
			{
				"id": "Sos_4",
				"type": "agent_4"
			},
			{
				"id": "PTB_0",
				"type": "region_0"
			},
			{
				"id": "SH2_1",
				"type": "region_1"
			},
			{
				"id": "SH3_2",
				"type": "region_2"
			},
			{
				"id": "dimerization_3",
				"type": "region_3"
			},
			{
				"id": "intra_4",
				"type": "region_4"
			},
			{
				"id": "a_0",
				"type": "key_res_0"
			},
			{
				"id": "b_1",
				"type": "key_res_1"
			},
			{
				"id": "l_2",
				"type": "key_res_2"
			},
			{
				"id": "c_3",
				"type": "key_res_3"
			},
			{
				"id": "n_4",
				"type": "key_res_4"
			},
			{
				"id": "cr_5",
				"type": "key_res_5"
			},
			{
				"id": "a_6",
				"type": "key_res_6"
			},
			{
				"id": "sh2_7",
				"type": "key_res_7"
			},
			{
				"id": "aa_0",
				"type": "attribute_list_0"
			},
			{
				"id": "aa_1",
				"type": "attribute_list_1"
			},
			{
				"id": "pos_2",
				"type": "attribute_list_2"
			},
			{
				"id": "pos_3",
				"type": "attribute_list_3"
			},
			{
				"id": "note_4",
				"type": "attribute_list_4"
			},
			{
				"id": "aa_5",
				"type": "attribute_list_5"
			},
			{
				"id": "rate_6",
				"type": "attribute_list_6"
			},
			{
				"id": "rate_7",
				"type": "attribute_list_7"
			},
			{
				"id": "rate_8",
				"type": "attribute_list_8"
			},
			{
				"id": "rate_9",
				"type": "attribute_list_9"
			},
			{
				"id": "rate_10",
				"type": "attribute_list_10"
			},
			{
				"id": "rate_11",
				"type": "attribute_list_11"
			},
			{
				"id": "rate_12",
				"type": "attribute_list_12"
			},
			{
				"id": "rate_13",
				"type": "attribute_list_13"
			},
			{
				"id": "rate_14",
				"type": "attribute_list_14"
			},
			{
				"id": "rate_15",
				"type": "attribute_list_15"
			},
			{
				"id": "rate_16",
				"type": "attribute_list_16"
			},
			{
				"id": "rate_17",
				"type": "attribute_list_17"
			},
			{
				"id": "rate_18",
				"type": "attribute_list_18"
			},
			{
				"id": "rate_19",
				"type": "attribute_list_19"
			},
			{
				"id": "rate_20",
				"type": "attribute_list_20"
			},
			{
				"id": "rate_21",
				"type": "attribute_list_21"
			},
			{
				"id": "rate_22",
				"type": "attribute_list_22"
			},
			{
				"id": "rate_23",
				"type": "attribute_list_23"
			},
			{
				"id": "rate_24",
				"type": "attribute_list_24"
			},
			{
				"id": "rate_25",
				"type": "attribute_list_25"
			},
			{
				"id": "phosphorylation_0",
				"type": "flag_0"
			},
			{
				"id": "phosphorylation_1",
				"type": "flag_1"
			},
			{
				"id": "phosphorylation_2",
				"type": "flag_2"
			},
			{
				"id": "phosphorylation_3",
				"type": "flag_3"
			},
			{
				"id": "phosphorylation_4",
				"type": "flag_4"
			},
			{
				"id": "ligand binding_0",
				"type": "action_bnd"
			},
			{
				"id": "ligand unbinding_1",
				"type": "action_brk"
			},
			{
				"id": "EGFR dimerization_2",
				"type": "action_bnd"
			},
			{
				"id": "EGFR unbind_3",
				"type": "action_brk"
			},
			{
				"id": "Shc binds Grb2_4",
				"type": "action_bnd"
			},
			{
				"id": "Shc unbinds Grb2_5",
				"type": "action_brk"
			},
			{
				"id": "EGFR binds Grb2_6",
				"type": "action_bnd"
			},
			{
				"id": "EGFR unbinds Grb2_7",
				"type": "action_brk"
			},
			{
				"id": "EGFR binds Shc_8",
				"type": "action_bnd"
			},
			{
				"id": "EGFR unbinds Shc_9",
				"type": "action_brk"
			},
			{
				"id": "Grb binds Sos_10",
				"type": "action_bnd"
			},
			{
				"id": "Grb unbinds Sos_11",
				"type": "action_brk"
			},
			{
				"id": "EGFR internal binding_12",
				"type": "action_bnd"
			},
			{
				"id": "EGFR internal unbinding_13",
				"type": "action_brk"
			},
			{
				"id": "pholation of EGFR@a_14",
				"type": "action_mod_pos"
			},
			{
				"id": "pholation of EGFR@b_15",
				"type": "action_mod_pos"
			},
			{
				"id": "depholation of EGFR@a_16",
				"type": "action_mod_neg"
			},
			{
				"id": "depholation of EGFR@b_17",
				"type": "action_mod_neg"
			},
			{
				"id": "pholation of Shc_18",
				"type": "action_mod_pos"
			},
			{
				"id": "depholation of Shc_19",
				"type": "action_mod_neg"
			}
		]
	},
	"children": [
		{
			"name": "ligand binding_0",
			"top_graph": {
				"edges": [
					{
						"from": "ligand binding_0",
						"to": "EGF_3_left"
					},
					{
						"from": "ligand binding_0",
						"to": "l_2_right"
					}
				],
				"nodes": [
					{
						"id": "ligand binding_0",
						"type": "ligand binding_0"
					},
					{
						"id": "EGF_3_left",
						"type": "EGF_3"
					},
					{
						"id": "l_2_right",
						"type": "l_2"
					},
					{
						"id": "cr_5_context",
						"type": "cr_5"
					}
				]
			},
			"children": []
		},
		{
			"name": "ligand unbinding_1",
			"top_graph": {
				"edges": [
					{
						"from": "ligand unbinding_1",
						"to": "EGF_3_left"
					},
					{
						"from": "ligand unbinding_1",
						"to": "l_2_right"
					}
				],
				"nodes": [
					{
						"id": "ligand unbinding_1",
						"type": "ligand unbinding_1"
					},
					{
						"id": "EGF_3_left",
						"type": "EGF_3"
					},
					{
						"id": "l_2_right",
						"type": "l_2"
					},
					{
						"id": "cr_5_context",
						"type": "cr_5"
					}
				]
			},
			"children": []
		},
		{
			"name": "EGFR dimerization_2",
			"top_graph": {
				"edges": [
					{
						"from": "EGFR dimerization_2",
						"to": "cr_5_left"
					},
					{
						"from": "EGFR dimerization_2",
						"to": "cr_5_right"
					}
				],
				"nodes": [
					{
						"id": "EGFR dimerization_2",
						"type": "EGFR dimerization_2"
					},
					{
						"id": "cr_5_left",
						"type": "cr_5"
					},
					{
						"id": "cr_5_right",
						"type": "cr_5"
					},
					{
						"id": "c_3_context",
						"type": "c_3"
					},
					{
						"id": "n_4_context",
						"type": "n_4"
					},
					{
						"id": "ligand binding_0_context",
						"type": "ligand binding_0"
					}
				]
			},
			"children": []
		},
		{
			"name": "EGFR unbind_3",
			"top_graph": {
				"edges": [
					{
						"from": "EGFR unbind_3",
						"to": "cr_5_left"
					},
					{
						"from": "EGFR unbind_3",
						"to": "cr_5_right"
					}
				],
				"nodes": [
					{
						"id": "EGFR unbind_3",
						"type": "EGFR unbind_3"
					},
					{
						"id": "cr_5_left",
						"type": "cr_5"
					},
					{
						"id": "cr_5_right",
						"type": "cr_5"
					},
					{
						"id": "c_3_context",
						"type": "c_3"
					},
					{
						"id": "n_4_context",
						"type": "n_4"
					},
					{
						"id": "ligand binding_0_context",
						"type": "ligand binding_0"
					}
				]
			},
			"children": []
		},
		{
			"name": "Shc binds Grb2_4",
			"top_graph": {
				"edges": [
					{
						"from": "Shc binds Grb2_4",
						"to": "a_6_left"
					},
					{
						"from": "Shc binds Grb2_4",
						"to": "sh2_7_right"
					}
				],
				"nodes": [
					{
						"id": "Shc binds Grb2_4",
						"type": "Shc binds Grb2_4"
					},
					{
						"id": "a_6_left",
						"type": "a_6"
					},
					{
						"id": "sh2_7_right",
						"type": "sh2_7"
					},
					{
						"id": "phosphorylation_2_context",
						"type": "phosphorylation_2"
					}
				]
			},
			"children": []
		},
		{
			"name": "Shc unbinds Grb2_5",
			"top_graph": {
				"edges": [
					{
						"from": "Shc unbinds Grb2_5",
						"to": "a_6_left"
					},
					{
						"from": "Shc unbinds Grb2_5",
						"to": "sh2_7_right"
					}
				],
				"nodes": [
					{
						"id": "Shc unbinds Grb2_5",
						"type": "Shc unbinds Grb2_5"
					},
					{
						"id": "a_6_left",
						"type": "a_6"
					},
					{
						"id": "sh2_7_right",
						"type": "sh2_7"
					},
					{
						"id": "phosphorylation_2_context",
						"type": "phosphorylation_2"
					}
				]
			},
			"children": []
		},
		{
			"name": "EGFR binds Grb2_6",
			"top_graph": {
				"edges": [
					{
						"from": "EGFR binds Grb2_6",
						"to": "a_0_left"
					},
					{
						"from": "EGFR binds Grb2_6",
						"to": "sh2_7_right"
					}
				],
				"nodes": [
					{
						"id": "EGFR binds Grb2_6",
						"type": "EGFR binds Grb2_6"
					},
					{
						"id": "a_0_left",
						"type": "a_0"
					},
					{
						"id": "sh2_7_right",
						"type": "sh2_7"
					},
					{
						"id": "phosphorylation_0_context",
						"type": "phosphorylation_0"
					}
				]
			},
			"children": []
		},
		{
			"name": "EGFR unbinds Grb2_7",
			"top_graph": {
				"edges": [
					{
						"from": "EGFR unbinds Grb2_7",
						"to": "a_0_left"
					},
					{
						"from": "EGFR unbinds Grb2_7",
						"to": "sh2_7_right"
					}
				],
				"nodes": [
					{
						"id": "EGFR unbinds Grb2_7",
						"type": "EGFR unbinds Grb2_7"
					},
					{
						"id": "a_0_left",
						"type": "a_0"
					},
					{
						"id": "sh2_7_right",
						"type": "sh2_7"
					},
					{
						"id": "phosphorylation_0_context",
						"type": "phosphorylation_0"
					}
				]
			},
			"children": []
		},
		{
			"name": "EGFR binds Shc_8",
			"top_graph": {
				"edges": [
					{
						"from": "EGFR binds Shc_8",
						"to": "b_1_left"
					},
					{
						"from": "EGFR binds Shc_8",
						"to": "PTB_0_right"
					}
				],
				"nodes": [
					{
						"id": "EGFR binds Shc_8",
						"type": "EGFR binds Shc_8"
					},
					{
						"id": "b_1_left",
						"type": "b_1"
					},
					{
						"id": "PTB_0_right",
						"type": "PTB_0"
					},
					{
						"id": "phosphorylation_1_context",
						"type": "phosphorylation_1"
					}
				]
			},
			"children": []
		},
		{
			"name": "EGFR unbinds Shc_9",
			"top_graph": {
				"edges": [
					{
						"from": "EGFR unbinds Shc_9",
						"to": "b_1_left"
					},
					{
						"from": "EGFR unbinds Shc_9",
						"to": "PTB_0_right"
					}
				],
				"nodes": [
					{
						"id": "EGFR unbinds Shc_9",
						"type": "EGFR unbinds Shc_9"
					},
					{
						"id": "b_1_left",
						"type": "b_1"
					},
					{
						"id": "PTB_0_right",
						"type": "PTB_0"
					},
					{
						"id": "phosphorylation_1_context",
						"type": "phosphorylation_1"
					}
				]
			},
			"children": []
		},
		{
			"name": "Grb binds Sos_10",
			"top_graph": {
				"edges": [
					{
						"from": "Grb binds Sos_10",
						"to": "Sos_4_left"
					},
					{
						"from": "Grb binds Sos_10",
						"to": "SH3_2_right"
					}
				],
				"nodes": [
					{
						"id": "Grb binds Sos_10",
						"type": "Grb binds Sos_10"
					},
					{
						"id": "Sos_4_left",
						"type": "Sos_4"
					},
					{
						"id": "SH3_2_right",
						"type": "SH3_2"
					}
				]
			},
			"children": []
		},
		{
			"name": "Grb unbinds Sos_11",
			"top_graph": {
				"edges": [
					{
						"from": "Grb unbinds Sos_11",
						"to": "Sos_4_left"
					},
					{
						"from": "Grb unbinds Sos_11",
						"to": "SH3_2_right"
					}
				],
				"nodes": [
					{
						"id": "Grb unbinds Sos_11",
						"type": "Grb unbinds Sos_11"
					},
					{
						"id": "Sos_4_left",
						"type": "Sos_4"
					},
					{
						"id": "SH3_2_right",
						"type": "SH3_2"
					}
				]
			},
			"children": []
		},
		{
			"name": "EGFR internal binding_12",
			"top_graph": {
				"edges": [
					{
						"from": "EGFR internal binding_12",
						"to": "c_3_left"
					},
					{
						"from": "EGFR internal binding_12",
						"to": "n_4_right"
					}
				],
				"nodes": [
					{
						"id": "EGFR internal binding_12",
						"type": "EGFR internal binding_12"
					},
					{
						"id": "c_3_left",
						"type": "c_3"
					},
					{
						"id": "n_4_right",
						"type": "n_4"
					},
					{
						"id": "EGFR dimerization_2_context",
						"type": "EGFR dimerization_2"
					}
				]
			},
			"children": []
		},
		{
			"name": "EGFR internal unbinding_13",
			"top_graph": {
				"edges": [
					{
						"from": "EGFR internal unbinding_13",
						"to": "c_3_left"
					},
					{
						"from": "EGFR internal unbinding_13",
						"to": "n_4_right"
					}
				],
				"nodes": [
					{
						"id": "EGFR internal unbinding_13",
						"type": "EGFR internal unbinding_13"
					},
					{
						"id": "c_3_left",
						"type": "c_3"
					},
					{
						"id": "n_4_right",
						"type": "n_4"
					},
					{
						"id": "EGFR dimerization_2_context",
						"type": "EGFR dimerization_2"
					}
				]
			},
			"children": []
		},
		{
			"name": "pholation of EGFR@a_14",
			"top_graph": {
				"edges": [
					{
						"from": "pholation of EGFR@a_14",
						"to": "phosphorylation_0_right"
					}
				],
				"nodes": [
					{
						"id": "pholation of EGFR@a_14",
						"type": "pholation of EGFR@a_14"
					},
					{
						"id": "phosphorylation_0_right",
						"type": "phosphorylation_0"
					},
					{
						"id": "EGFR internal binding_12_context",
						"type": "EGFR internal binding_12"
					}
				]
			},
			"children": []
		},
		{
			"name": "pholation of EGFR@b_15",
			"top_graph": {
				"edges": [
					{
						"from": "pholation of EGFR@b_15",
						"to": "phosphorylation_1_right"
					}
				],
				"nodes": [
					{
						"id": "pholation of EGFR@b_15",
						"type": "pholation of EGFR@b_15"
					},
					{
						"id": "phosphorylation_1_right",
						"type": "phosphorylation_1"
					},
					{
						"id": "EGFR internal binding_12_context",
						"type": "EGFR internal binding_12"
					}
				]
			},
			"children": []
		},
		{
			"name": "depholation of EGFR@a_16",
			"top_graph": {
				"edges": [
					{
						"from": "depholation of EGFR@a_16",
						"to": "phosphorylation_0_right"
					}
				],
				"nodes": [
					{
						"id": "depholation of EGFR@a_16",
						"type": "depholation of EGFR@a_16"
					},
					{
						"id": "phosphorylation_0_right",
						"type": "phosphorylation_0"
					}
				]
			},
			"children": []
		},
		{
			"name": "depholation of EGFR@b_17",
			"top_graph": {
				"edges": [
					{
						"from": "depholation of EGFR@b_17",
						"to": "phosphorylation_1_right"
					}
				],
				"nodes": [
					{
						"id": "depholation of EGFR@b_17",
						"type": "depholation of EGFR@b_17"
					},
					{
						"id": "phosphorylation_1_right",
						"type": "phosphorylation_1"
					}
				]
			},
			"children": []
		},
		{
			"name": "pholation of Shc_18",
			"top_graph": {
				"edges": [
					{
						"from": "pholation of Shc_18",
						"to": "phosphorylation_2_right"
					}
				],
				"nodes": [
					{
						"id": "pholation of Shc_18",
						"type": "pholation of Shc_18"
					},
					{
						"id": "phosphorylation_2_right",
						"type": "phosphorylation_2"
					},
					{
						"id": "EGFR binds Shc_8_context",
						"type": "EGFR binds Shc_8"
					}
				]
			},
			"children": []
		},
		{
			"name": "depholation of Shc_19",
			"top_graph": {
				"edges": [
					{
						"from": "depholation of Shc_19",
						"to": "phosphorylation_2_right"
					}
				],
				"nodes": [
					{
						"id": "depholation of Shc_19",
						"type": "depholation of Shc_19"
					},
					{
						"id": "phosphorylation_2_right",
						"type": "phosphorylation_2"
					}
				]
			},
			"children": []
		}
	]
}

api.hierarchyhierarchyPathPost("/agrogroo/", sos, callback);