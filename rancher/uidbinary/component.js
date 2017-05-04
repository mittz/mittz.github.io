/* v----- Do not change anything between here
 *       (the DRIVERNAME placeholder will be automatically replaced during build) */
define('ui/components/machine/driver-ecl/component', ['exports', 'ember', 'ui/mixins/driver'], function (exports, _ember, _uiMixinsDriver) {

  exports['default'] = _ember['default'].Component.extend(_uiMixinsDriver['default'], {
    driverName: 'ecl',
/* ^--- And here */

    // Write your component here, starting with setting 'model' to a machine with your config populated
    bootstrap: function() {
      let config = this.get('store').createRecord({
        type        : 'eclConfig',
        authUrl: '',
        tenantId: '',
        username: '',
        password: '',
        flavorName: '2CPU-8GB',
        imageId: '',
        netId: '',
        sshPort: 22,
        sshUser: 'root',
        availabilityZone: '',
        userDataFile: '',
      });

      let type = 'host';

      if (!this.get('useHost')) {
        type = 'machine';
      }

      this.set('model', this.get('store').createRecord({
        type: type,
        'eclConfig': config,
      }));
    },

    // Add custom validation beyond what can be done from the config API schema
    validate() {
      // Get generic API validation errors
      this._super();
      var errors = this.get('errors')||[];

      // Add more specific errors

      // Check something and add an error entry if it fails:
      if ( parseInt(this.get('model.eclConfig.size'),10) < 1024 )
      {
        errors.push('Size must be at least 1024 MB');
      }

      // Set the array of errors for display,
      // and return true if saving should continue.
      if ( errors.get('length') )
      {
        this.set('errors', errors);
        return false;
      }
      else
      {
        this.set('errors', null);
        return true;
      }
    },

    // Any computed properties or custom logic can go here
  });
});
;
define("ui/components/machine/driver-ecl/template",["exports","ember","ui/mixins/driver"],function(exports,_ember,_uiMixinsDriver){

exports["default"] = Ember.HTMLBars.template((function() {
  return {
    meta: {
      "revision": "Ember@2.9.1",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 108,
          "column": 0
        }
      }
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("section");
      dom.setAttribute(el1,"class","horizontal-form");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","container-fluid");
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","over-hr r-mt20 r-mb20");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("span");
      var el5 = dom.createTextNode("ACCOUNT ACCESS");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row form-group");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("Auth URL*");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("Tenant ID*");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row form-group");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("Username*");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("Password*");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","over-hr r-mt20 r-mb20");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("span");
      var el5 = dom.createTextNode("INSTANCE");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row form-group");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("Flavor Name*");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("Image ID*");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row form-group");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("SSH Port");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("SSH User");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row form-group");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("Network ID*");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("Availability Zone");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    \n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row form-group");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("User Data File");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    \n");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [0]);
      var element1 = dom.childAt(element0, [1]);
      var element2 = dom.childAt(element1, [6]);
      var element3 = dom.childAt(element1, [8]);
      var element4 = dom.childAt(element1, [12]);
      var element5 = dom.childAt(element1, [14]);
      var element6 = dom.childAt(element1, [16]);
      var morphs = new Array(15);
      morphs[0] = dom.createMorphAt(element1,2,2);
      morphs[1] = dom.createMorphAt(dom.childAt(element2, [3]),1,1);
      morphs[2] = dom.createMorphAt(dom.childAt(element2, [7]),1,1);
      morphs[3] = dom.createMorphAt(dom.childAt(element3, [3]),1,1);
      morphs[4] = dom.createMorphAt(dom.childAt(element3, [7]),1,1);
      morphs[5] = dom.createMorphAt(dom.childAt(element4, [3]),1,1);
      morphs[6] = dom.createMorphAt(dom.childAt(element4, [7]),1,1);
      morphs[7] = dom.createMorphAt(dom.childAt(element5, [3]),1,1);
      morphs[8] = dom.createMorphAt(dom.childAt(element5, [7]),1,1);
      morphs[9] = dom.createMorphAt(dom.childAt(element6, [3]),1,1);
      morphs[10] = dom.createMorphAt(dom.childAt(element6, [7]),1,1);
      morphs[11] = dom.createMorphAt(dom.childAt(element1, [18, 3]),1,1);
      morphs[12] = dom.createMorphAt(element1,21,21);
      morphs[13] = dom.createMorphAt(element0,4,4);
      morphs[14] = dom.createMorphAt(element0,7,7);
      return morphs;
    },
    statements: [
      ["inline","partial",["host/add-common"],[],["loc",[null,[4,4],[4,33]]],0,0],
      ["inline","input",[],["type","text","class","form-control","placeholder","https://keystone-[region]-ecl.api.ntt.com/v3/","value",["subexpr","@mut",[["get","model.eclConfig.authUrl",["loc",[null,[15,115],[15,138]]],0,0,0,0]],[],[],0,0]],["loc",[null,[15,8],[15,141]]],0,0],
      ["inline","input",[],["type","text","class","form-control","value",["subexpr","@mut",[["get","model.eclConfig.tenantId",["loc",[null,[21,55],[21,79]]],0,0,0,0]],[],[],0,0]],["loc",[null,[21,8],[21,82]]],0,0],
      ["inline","input",[],["type","text","class","form-control","value",["subexpr","@mut",[["get","model.eclConfig.username",["loc",[null,[30,55],[30,79]]],0,0,0,0]],[],[],0,0]],["loc",[null,[30,8],[30,82]]],0,0],
      ["inline","input",[],["type","text","class","form-control","value",["subexpr","@mut",[["get","model.eclConfig.password",["loc",[null,[36,55],[36,79]]],0,0,0,0]],[],[],0,0]],["loc",[null,[36,8],[36,82]]],0,0],
      ["inline","input",[],["type","text","class","form-control","value",["subexpr","@mut",[["get","model.eclConfig.flavorName",["loc",[null,[49,55],[49,81]]],0,0,0,0]],[],[],0,0]],["loc",[null,[49,8],[49,84]]],0,0],
      ["inline","input",[],["type","text","class","form-control","value",["subexpr","@mut",[["get","model.eclConfig.imageId",["loc",[null,[55,55],[55,78]]],0,0,0,0]],[],[],0,0]],["loc",[null,[55,8],[55,81]]],0,0],
      ["inline","input",[],["type","text","class","form-control","value",["subexpr","@mut",[["get","model.eclConfig.sshPort",["loc",[null,[64,55],[64,78]]],0,0,0,0]],[],[],0,0]],["loc",[null,[64,8],[64,81]]],0,0],
      ["inline","input",[],["type","text","class","form-control","value",["subexpr","@mut",[["get","model.eclConfig.sshUser",["loc",[null,[70,55],[70,78]]],0,0,0,0]],[],[],0,0]],["loc",[null,[70,8],[70,81]]],0,0],
      ["inline","input",[],["type","text","class","form-control","value",["subexpr","@mut",[["get","model.eclConfig.netId",["loc",[null,[79,55],[79,76]]],0,0,0,0]],[],[],0,0]],["loc",[null,[79,8],[79,79]]],0,0],
      ["inline","input",[],["type","text","class","form-control","value",["subexpr","@mut",[["get","model.eclConfig.availabilityZone",["loc",[null,[85,55],[85,87]]],0,0,0,0]],[],[],0,0]],["loc",[null,[85,8],[85,90]]],0,0],
      ["inline","input",[],["type","text","class","form-control","value",["subexpr","@mut",[["get","model.eclConfig.userDataFile",["loc",[null,[94,55],[94,83]]],0,0,0,0]],[],[],0,0]],["loc",[null,[94,8],[94,86]]],0,0],
      ["inline","partial",["host/add-options"],[],["loc",[null,[99,4],[99,34]]],0,0],
      ["inline","top-errors",[],["errors",["subexpr","@mut",[["get","errors",["loc",[null,[103,22],[103,28]]],0,0,0,0]],[],[],0,0]],["loc",[null,[103,2],[103,30]]],0,0],
      ["inline","save-cancel",[],["save","save","cancel","cancel"],["loc",[null,[106,2],[106,46]]],0,0]
    ],
    locals: [],
    templates: []
  };
}()));;

});
