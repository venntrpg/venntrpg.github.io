(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["create"],{1523:function(t,e,a){"use strict";a("8c1d")},"15e8":function(t,e,a){},2947:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},t._l(t.attributes,(function(e){return a("button",{key:e,staticClass:"btn noSelect basicBtn",attrs:{disabled:t.buttonDisabled(e)},on:{click:function(a){return t.selectionButton(e)}}},[a("div",{staticClass:"basicBtnContents skinny"},[t.isSelected(e)?a("span",{staticClass:"material-icons space"},[t._v(" radio_button_checked ")]):a("span",{staticClass:"material-icons space"},[t._v("radio_button_unchecked")]),a("span",[t._v(t._s(e.toUpperCase())+" "),t.character&&e in t.character?a("span",[t._v("("),a("span",{staticClass:"number"},[t._v(t._s(t.character[e]))]),t._v(")")]):t._e()])])])})),0)},r=[],s=(a("a9e3"),a("caad"),a("2532"),a("4de4"),a("d3b7"),a("9613")),n={name:"AttributeSelection",props:{attributes:{type:Array,default:function(){return s["a"]}},selected:{type:Array,required:!0},maxChoices:{type:Number,required:!0},disabledChoices:{type:Array,default:function(){return[]}},character:{type:Object,required:!1}},methods:{isSelected:function(t){return this.selected.includes(t)},buttonDisabled:function(t){var e=this.selected.length>=this.maxChoices&&!this.isSelected(t);return this.disabledChoices.length>0&&this.disabledChoices.includes(t)||e},selectionButton:function(t){if(!(this.selected.length>this.maxChoices)){var e=this.selected;this.isSelected(t)?e=e.filter((function(e){return e!==t})):e.push(t),this.$emit("selectedUpdated",e)}}}},c=n,o=(a("ecc1"),a("2877")),l=Object(o["a"])(c,i,r,!1,null,"0e929e3b",null);e["a"]=l.exports},"2f12":function(t,e,a){},4771:function(t,e,a){},5700:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("button",{staticClass:"btn roundedButton",class:t.buttonClass,attrs:{disabled:t.disabled},on:{click:t.toggleVisible}},[t._v(" "+t._s(t.buttonText)+" ")]),t.visible?a("div",{staticClass:"modal show",attrs:{id:"confirmation-modal"},on:{click:t.closeClick}},[a("div",{staticClass:"dialogue card column"},[a("div",{staticClass:"dialogue-content"},[a("div",{staticClass:"alignRow split dialogue-title"},[a("h2",{staticClass:"mt-0 mb-0"},[t._v(t._s(t.title))]),a("button",{staticClass:"btn basicBtn",on:{click:t.toggleVisible}},[t._m(0)])]),a("div",{staticClass:"seperator thin"}),a("div",{staticClass:"dialogue-details"},[t._v(" "+t._s(t.details)+" ")]),a("div",{staticClass:"seperator thin"}),a("div",{staticClass:"alignRow end gap wrap dialogue-details"},[a("button",{staticClass:"btn roundedButton purple",on:{click:t.mainButton}},[t._v(" "+t._s(t.confStr)+" ")]),a("button",{staticClass:"btn roundedButton clear",on:{click:t.toggleVisible}},[t._v(" Cancel ")])])])])]):t._e()])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"basicBtnContents"},[a("span",{staticClass:"material-icons"},[t._v("close")])])}],s={name:"ConfirmationModal",props:{buttonText:{type:String,default:"Delete"},buttonClass:{type:String,default:""},disabled:{type:Boolean,default:!1},title:{type:String,default:"Are you sure?"},details:{type:String,default:"Are you sure?"},confStr:{type:String,default:"Yes"}},data:function(){return{visible:!1}},computed:{visibleClass:function(){return this.visible?"show":""}},methods:{toggleVisible:function(){this.visible=!this.visible},mainButton:function(){this.$emit("mainButton"),this.toggleVisible()},closeClick:function(t){document.getElementById("confirmation-modal")===t.target&&this.toggleVisible()}}},n=s,c=a("2877"),o=Object(c["a"])(n,i,r,!1,null,null,null);e["a"]=o.exports},"5e5b":function(t,e,a){"use strict";a("8dc9")},"8a52":function(t,e,a){},"8c1d":function(t,e,a){},"8dc9":function(t,e,a){},"96d2":function(t,e,a){"use strict";a("8a52")},c01c:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.options,(function(e,i){return a("button",{key:i,staticClass:"btn noSelect basicBtn",on:{click:function(e){return t.selectionButton(i)}}},[a("div",{staticClass:"basicBtnContents skinny"},[t.isSelected(i)?a("span",{staticClass:"material-icons space"},[t._v(" radio_button_checked ")]):a("span",{staticClass:"material-icons space"},[t._v("radio_button_unchecked")]),a("div",{staticClass:"textContents",domProps:{innerHTML:t._s(e)}})])])})),0)},r=[],s={name:"RadioButtonSelection",props:{options:Object,selected:String,unselectable:{type:Boolean,default:!1}},methods:{isSelected:function(t){return t===this.selected},selectionButton:function(t){this.isSelected(t)?this.unselectable&&this.$emit("selectedUpdated",""):this.$emit("selectedUpdated",t)}}},n=s,c=(a("f805"),a("2877")),o=Object(c["a"])(n,i,r,!1,null,"4ffbf95c",null);e["a"]=o.exports},d597:function(t,e,a){"use strict";a("2f12")},d879:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.isNewSection?a("new-flow"):t.isImportSection?a("import-flow"):a("div",{staticClass:"page"},[a("div",{staticClass:"mediumPageWidth selectFlowContainer"},[a("div",{staticClass:"selectFlow"},[a("h1",{staticClass:"centeredText"},[t._v("CHARACTER CREATION")]),a("p",[t._v(" You can create a totally new character or import a character which you have already created. ")]),a("router-link",{staticClass:"btn roundedButton wide topMargin",attrs:{to:"/create/new"}},[t._v(" Make a new character! ")]),a("router-link",{staticClass:"btn roundedButton wide topMargin",attrs:{to:"/create/import"}},[t._v(" Import an old character! ")])],1)])])],1)},r=[],s=a("5530"),n=a("2f62"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"subNav"},[a("button",{staticClass:"btn navButton subNavButton noSelect createNavButton",class:t.getMobileSidebarClass,on:{click:function(e){return t.createNavButton()}}},[t._v(" CREATE CHARACTER ")]),a("button",{staticClass:"btn navButton subNavButton noSelect statsNavButton",class:t.getMobileSidebarClass,on:{click:function(e){return t.statsNavButton()}}},[t._v(" SHOW STATS ")])]),a("div",{staticClass:"sideBar",class:[t.getHiddenSidebarClass,t.getMobileSidebarClass]},[a("combat-stats",{attrs:{character:t.createCharacter,showItems:!0}})],1),a("div",{staticClass:"page sideBarPage",class:[t.getHiddenSidebarClass,t.getMobileSidebarClass]},[a("div",{directives:[{name:"responsive",rawName:"v-responsive",value:t.breakpoints,expression:"breakpoints"}],staticClass:"largePageWidth main"},[a("h1",{staticClass:"centeredText"},[t._v("CREATE NEW CHARACTER")]),t._m(0),a("h2",[t._v("Step 1: Choose a name")]),t._m(1),t._m(2),a("div",{staticClass:"alignRow mt-4 nameRow"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.create.name,expression:"create.name"}],staticClass:"input nameInput",attrs:{type:"text",name:"charName",placeholder:"Bilbo Baggins",id:"new-name"},domProps:{value:t.create.name},on:{input:function(e){e.target.composing||t.$set(t.create,"name",e.target.value)}}}),a("button",{staticClass:"btn roundedButton randomNameButton",attrs:{disabled:t.randomNamesDisabled},on:{click:function(e){return t.randomNameButton()}}},[t._m(3)])]),a("h2",[t._v("Step 2: Create your backstory")]),t._m(4),a("h2",[t._v("Step 3: Choose a Gift")]),t._m(5),a("gift-selection",{attrs:{gift:t.create.gift},on:{giftUpdated:t.giftUpdated}}),a("h2",[t._v("Step 4: Attribute scores")]),a("p",[t._v("In this step, you select your base attributes.")]),a("div",{staticClass:"card column padded mb-24"},[a("p",{staticClass:"textBlock mt-0"},[t._v(" 1. Select three attributes you used most as a child. ")]),a("attribute-selection",{attrs:{selected:t.create.childAttrs,maxChoices:3},on:{selectedUpdated:t.childAttrsUpdated}})],1),a("div",{staticClass:"card column padded mb-24"},[a("p",{staticClass:"textBlock mt-0"},[t._v(" 2. Select three attributes you used most in the last six years. ")]),a("attribute-selection",{attrs:{selected:t.create.adultAttrs,maxChoices:3},on:{selectedUpdated:t.adultAttrsUpdated}})],1),a("div",{staticClass:"card column padded mb-24"},[a("p",{staticClass:"textBlock mt-0"},[t._v("3. Choose one:")]),a("radio-button-selection",{attrs:{options:t.getAdditionalAttrChoiceOptions,selected:t.create.additionalAttrChoice},on:{selectedUpdated:t.additionalAttrChoiceUpdated}}),a("attribute-selection",{attrs:{selected:t.create.additionalAttrs,maxChoices:t.maxAdditionalAttrsChoices,disabledChoices:t.blockAdditionalAttrsChoices},on:{selectedUpdated:t.additionalAttrsUpdated}})],1),a("div",{staticClass:"card column padded mb-24"},[a("p",{staticClass:"textBlock mt-0"},[t._v(" 4. Subtract 1 from one Attribute that is currently at 0, if one exists. You may pick any Attribute from amongst those at 0, but if your character is... ")]),t._m(6),a("attribute-selection",{attrs:{selected:t.create.badAttrs,maxChoices:1,disabledChoices:t.blockBadAttrsChoices},on:{selectedUpdated:t.badAttrsUpdated}})],1),a("div",{staticClass:"card column padded mb-24"},[t._m(7),a("attribute-selection",{attrs:{selected:t.create.grate1,maxChoices:1},on:{selectedUpdated:t.grate1Updated}}),a("div",{staticClass:"seperator mt-16 mb-16"}),t._m(8),a("attribute-selection",{attrs:{selected:t.create.grate3,maxChoices:1},on:{selectedUpdated:t.grate3Updated}})],1),a("h2",[t._v("Step 5: Decide your Quests")]),t._m(9),a("h2",[t._v("Step 6: Beginner Boons")]),a("p",{staticClass:"textBlock"},[t._v(" This section helps you figure out what equipment you have on you. ")]),a("div",{staticClass:"card column padded mb-24"},[a("p",{staticClass:"textBlock mt-0"},[t._v("1. What do you keep at your side?")]),a("radio-button-selection",{attrs:{options:t.getSideEquipmentOptions,selected:t.create.sideItem},on:{selectedUpdated:t.sideItemUpdated}}),t.showRememberOptions?a("div",[a("p",[t._v('Select "Something to Remember" benefit:')]),a("radio-button-selection",{attrs:{options:t.getRememberOptions,selected:t.create.rememberItem},on:{selectedUpdated:t.rememberItemUpdated}})],1):t._e()],1),a("div",{staticClass:"card column padded mb-24"},[a("p",{staticClass:"textBlock mt-0"},[t._v("2. Describe your outfit.")]),a("p",{staticClass:"textBlock"},[t._v(" This is your starting Item Container. If you buy another item container, it replaces this one. ")]),a("radio-button-selection",{attrs:{options:t.getOutfitOptions,selected:t.create.outfit},on:{selectedUpdated:t.outfitUpdated}})],1),a("div",{staticClass:"card column padded"},[a("p",{staticClass:"textBlock mt-0"},[t._v("3. What did you bring with you?")]),a("radio-button-selection",{attrs:{options:t.getItemSetOptions,selected:t.create.itemSet},on:{selectedUpdated:t.itemSetUpdated}})],1),a("h2",[t._v("Step 7: XP and Abilities")]),a("div",{staticClass:"card column padded"},[a("p",{staticClass:"textBlock mt-0"},[t._v("Are you new to adventuring?")]),a("radio-button-selection",{attrs:{options:t.getInexperiencedOptions,selected:t.getInexperiencedOption},on:{selectedUpdated:t.experienceUpdated}})],1),a("p",{staticClass:"textBlock"},[t._v(" For now, you need to go to the Character page to select abilities and buy / sell items ")]),a("h2",[t._v("Step 8: Finish the character")]),a("p",{staticClass:"textBlock"},[t._v(' Click the "Create Character" button to officially create the character. ')]),a("p",{staticClass:"textBlock"},[t._v(' Click the "Clear Character" button to delete this character and start again. ')]),a("div",{staticClass:"alignRow gap wrap split mt-8 mb-128"},[a("confirmation-modal",{attrs:{buttonText:"Create Character",confStr:"Create Character",details:"Are you sure you are done editing this character? Most fields will still be editable once you save this character to the server."},on:{mainButton:t.createCharacterButton}}),a("confirmation-modal",{attrs:{buttonText:"Clear Character",buttonClass:"clear",confStr:"Delete Character",details:"Are you sure you want to delete your progress on this character? It will not be saved."},on:{mainButton:t.clearCharacter}})],1)],1)])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"textBlock"},[t._v(" Current version: "),a("a",{staticClass:"link",attrs:{href:"https://vennt.fandom.com/wiki/Character_Creation?oldid=4426",target:"_blank"}},[t._v(" Revision as of 16:44, 15 March 2022 ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"textBlock"},[t._v(" This follows the guide on the "),a("a",{staticClass:"link",attrs:{href:"https://vennt.fandom.com/wiki/Character_Creation",target:"_blank"}},[t._v(" character creation wiki page")]),t._v(". ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"new-name"}},[a("p",{staticClass:"textBlock"},[t._v(" Choose a name for your character. You can always come back to this step later. Or, press the button to generate a random name for now. ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"btnContents"},[a("span",{staticClass:"material-icons"},[t._v("refresh")]),t._v(" Random name ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"textBlock"},[t._v(" For now, this process must be completed in a seperate document. Follow "),a("a",{staticClass:"link",attrs:{href:"https://vennt.fandom.com/wiki/Backstory",target:"_blank"}},[t._v(" this wiki page ")]),t._v(" for help with coming up a character concept and describing your backstory. ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"textBlock"},[a("i",[t._v(" Most legends are born gifted in some way. Mozart was gifted in music, Achilles was gifted in combat, and Merlin was gifted in magic. There are nine gifts available to choose from as a hero of Amnis, each one providing unique boons to your character. ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[t._v("Inattentive... ...You might want to pick PER.")]),a("li",[t._v("A luddite... ...You might want to pick TEK.")]),a("li",[t._v("Clumsy... ...You might want to pick DEX.")]),a("li",[t._v("Ignorant... ...You might want to pick INT.")]),a("li",[t._v("Impatient... ...You might want to pick WIS.")]),a("li",[t._v("Sluggish... ...You might want to pick AGI.")]),a("li",[t._v("Apathetic... ...You might want to pick SPI.")]),a("li",[t._v("Weak... ...You might want to pick STR.")]),a("li",[t._v("Repulsive... ...You might want to pick CHA.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"textBlock mt-0"},[t._v(" 5. Select an attribute that corresponds to your first grate. This will subtract 1 from the selected attribute. (Optional, requires the "),a("a",{staticClass:"link",attrs:{href:"https://vennt.fandom.com/wiki/Course_of_Flux",target:"_blank"}},[t._v("Course of Flux")]),t._v(") ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"textBlock mt-0"},[t._v(" Select an attribute that corresponds to your third grate. This will add 1 to the selected attribute. (Optional, requires the "),a("a",{staticClass:"link",attrs:{href:"https://vennt.fandom.com/wiki/Course_of_Flux",target:"_blank"}},[t._v("Course of Flux")]),t._v(") ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"textBlock"},[t._v(" Set 1-3 "),a("a",{staticClass:"link",attrs:{href:"https://vennt.fandom.com/wiki/Quests",target:"_blank"}},[t._v(" Quests ")]),t._v(" for your character. For help inventing a character concept, see "),a("a",{staticClass:"link",attrs:{href:"https://vennt.fandom.com/wiki/Character_Concept_Help",target:"_blank"}},[t._v(" this page")]),t._v(". Note: this data cannot be stored here, so you should keep this in your Google Sheet. ")])}],l=(a("b0c0"),a("caad"),a("4de4"),a("d3b7"),a("2532"),a("e9c4"),a("be26")),u=a("2947"),d=a("b03f"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.showGiftList?a("div",[a("button",{staticClass:"btn basicBtn noSelect",attrs:{disabled:t.dropDownDisabled},on:{click:function(e){return t.toggleDropDown()}}},[t._m(0)]),a("div",{staticClass:"giftCardGroup"},t._l(t.giftMap,(function(e,i){return a("button",{key:i,staticClass:"btn noSelect card selectable giftCard",class:t.getGiftSelectedClass(i),on:{click:function(e){return t.giftButton(i)}}},[a("GiftDescription",{attrs:{gift:e}})],1)})),0)]):a("div",[a("button",{staticClass:"btn basicBtn noSelect",on:{click:function(e){return t.toggleDropDown()}}},[t._m(1)]),a("div",{staticClass:"card singleCard"},[a("GiftDescription",{attrs:{gift:t.giftMap[t.gift]}})],1)])])},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"basicBtnContents"},[t._v(" Hide Unselected Gifts "),a("span",{staticClass:"material-icons"},[t._v("keyboard_arrow_up")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"basicBtnContents"},[t._v(" Show All Gifts "),a("span",{staticClass:"material-icons"},[t._v("keyboard_arrow_down")])])}],m=a("dd79"),f={name:"GiftSelection",props:{gift:String},components:{GiftDescription:m["a"]},data:function(){return{showFullList:!1}},computed:{dropDownDisabled:function(){return void 0===this.giftMap[this.gift]},showGiftList:function(){return this.showFullList||this.dropDownDisabled},giftMap:function(){return{per:"Alertness",tek:"Craft",agi:"Alacrity",dex:"Finesse",int:"Mind",spi:"Magic",str:"Rage",wis:"Science",cha:"Charm",none:"None"}}},methods:{getGiftSelectedClass:function(t){return this.gift===t?"selected":""},giftButton:function(t){this.$emit("giftUpdated",t)},toggleDropDown:function(){this.showFullList=!this.showFullList}}},b=f,v=(a("d597"),a("2877")),g=Object(v["a"])(b,h,p,!1,null,"e822f524",null),C=g.exports,_=a("c01c"),k=a("5700"),x=a("7fe1"),S=a("9613"),A={name:"NewFlow",components:{AttributeSelection:u["a"],CombatStats:d["a"],GiftSelection:C,RadioButtonSelection:_["a"],ConfirmationModal:k["a"]},directives:{responsive:l["a"]},data:function(){return{showingStats:!1,breakpoints:{bp900:function(t){return t.width<900},bp600:function(t){return t.width<600}},create:{name:"",gift:"",childAttrs:[],adultAttrs:[],badAttrs:[],additionalAttrChoice:"",additionalAttrs:[],grate1:[],grate3:[],sideItem:"",rememberItem:"",outfit:"",itemSet:"",inexperienced:!0}}},beforeMount:function(){var t=localStorage.getItem(S["c"]);if(t)try{var e=JSON.parse(t);this.create=e}catch(a){localStorage.removeItem(S["c"])}},mounted:function(){this.$store.dispatch("other/getRandomNames")},computed:Object(s["a"])(Object(s["a"])({},Object(n["e"])("other",["randomNames","randomNamesDisabled"])),{},{getHiddenSidebarClass:function(){return""===this.create.name?"hidden":""},getMobileSidebarClass:function(){return this.showingStats?"showStats":""},calculateHP:function(){var t=this.create.inexperienced?1:2;return 20+t+3*this.calculateAttribute("str")},calculateMP:function(){return 6+3*this.calculateAttribute("wis")},calculateVim:function(){return this.calculateHP},calculateInit:function(){return this.calculateAttribute("agi")+this.calculateAttribute("dex")},calculateSpeed:function(){return 3+this.calculateAttribute("agi")},calculateXP:function(){var t=0;return t+=this.create.inexperienced?1e3:2500,"read"===this.create.sideItem&&(t+=100),t},calculateSP:function(){var t=0;return["useful","eat"].includes(this.create.sideItem)&&(t+=50),"fashionable"===this.create.outfit&&(t+=100),t},calculateItems:function(){var t=[];switch("fashionable"===this.create.outfit?t.push("Fashionable Outfit"):"functional"===this.create.outfit&&t.push("Functional Outfit"),t.push("Melee Blade","Ranged Sidearm"),this.create.itemSet){case"chef":t.push("Rations","Rations","Rations","Tasty Water","Tasty Water","Tasty Water","Frying Pan","Cooking Kit");break;case"dungeoneer":t.push("Flare Rocket","Lockpick set","Flint and Steel","Rope","Sounding Stones","Lux Ward","Lantern");break;case"merchant":t.push("Elixir of Energy*","Rope","Writing Kit","Lantern","Coffee","Coffee","Coffee");break;case"medic":t.push("Bandages","Bandages","Bandages","Healing Salve","Healing Salve","Godfire","Sour Blessing","Elixir of Life*");break;case"scientist":t.push("Lux Ward","Elixir of Focus*","Compass","Writing Kit","Lantern, Bullseye");break;case"traveler":t.push("Bedroll","Lux Ward","Spyglass","Rations","Rations","Rations","Rations","Rations","Rations");break}return Object(x["g"])(t)},getGiftName:function(){var t={per:"Alertness",tek:"Craft",agi:"Alacrity",dex:"Finesse",int:"Mind",spi:"Magic",str:"Rage",wis:"Science",cha:"Charm",none:"None"},e=t[this.create.gift];return e||""},createCharacter:function(){return{name:this.create.name,gift:this.getGiftName,agi:this.calculateAttribute("agi"),cha:this.calculateAttribute("cha"),dex:this.calculateAttribute("dex"),int:this.calculateAttribute("int"),per:this.calculateAttribute("per"),spi:this.calculateAttribute("spi"),str:this.calculateAttribute("str"),tek:this.calculateAttribute("tek"),wis:this.calculateAttribute("wis"),hp:this.calculateHP,maxHp:this.calculateHP,mp:this.calculateMP,maxMp:this.calculateMP,vim:this.calculateVim,maxVim:this.calculateVim,hero:3,maxHero:9,armor:0,init:this.calculateInit,speed:this.calculateSpeed,xp:this.calculateXP,sp:this.calculateSP,items:this.calculateItems}},blockAdditionalAttrsChoices:function(){var t=this;switch(this.create.additionalAttrChoice){case"one":return S["a"].filter((function(e){return t.create.gift===e||t.create.childAttrs.includes(e)===t.create.adultAttrs.includes(e)}));case"zero":return S["a"].filter((function(e){return t.create.gift===e||t.create.childAttrs.includes(e)||t.create.adultAttrs.includes(e)}))}return[]},maxAdditionalAttrsChoices:function(){switch(this.create.additionalAttrChoice){case"any":return 1;case"one":return 2;case"zero":return 3}return 0},blockBadAttrsChoices:function(){var t=this;return S["a"].filter((function(e){return t.create.gift===e||t.create.childAttrs.includes(e)||t.create.adultAttrs.includes(e)||t.create.additionalAttrs.includes(e)}))},getAdditionalAttrChoiceOptions:function(){return{any:"Add 1 to one Attribute of your choice",one:"Add 1 to two Attributes at 1",zero:"Add 1 to three Attributes at 0"}},getSideEquipmentOptions:function(){return{sharp:"<b>Something sharp:</b> Gain +1 Dexterity and two more Blade weapons.",remember:"<b>Something to remember:</b> Gain +1 Spirit OR +1 Charisma.",useful:"<b>Something useful:</b> Gain +1 Wisdom and 50 sp to spend on Equipment.",eat:"<b>Something to eat:</b> Gain +1 Strength and 50 sp to spend on Consumables.",read:"<b>Something to read:</b> Gain +1 Intelligence and 100 XP."}},showRememberOptions:function(){return"remember"===this.create.sideItem},getRememberOptions:function(){return{spi:"<b>Spirit:</b> Gain +1 Spirit.",cha:"<b>Charisma:</b> Gain +1 Charisma."}},getOutfitOptions:function(){return{fashionable:"<b>Fashionable:</b> Gain +1 Charisma and 100sp. Your fashionable outfit has a carrying capacity of 5 Bulk.",functional:"<b>Functional:</b> Gain +1 Agility. Your functional outfit has a carrying capacity of 15 Bulk."}},getItemSetOptions:function(){return{chef:"<b>Chef:</b> 3 Rations, 3 Tasty Waters, 1 Frying Pan, 1 Cooking Kit",dungeoneer:"<b>Dungeoneer:</b> 1 Flare Rocket, 1 Lockpick set, 1 Flint and Steel, 1 Rope, 1 bag of Sounding Stones, 1 Lux Ward, 1 Lantern",merchant:"<b>Merchant:</b> 1 Elixir of Energy, 1 Rope, 1 Writing Kit, 1 Lantern, 3 Coffee or Alcohol",medic:"<b>Medic:</b> 3 Bandages, 2 Healing Salves, 1 Godfire, 1 Sour Blessing, 1 Elixir of Life",scientist:"<b>Scientist:</b> 1 Lux Ward, 1 Elixir of Focus, 1 Compass, 1 Writing Kit, 1 Bullseye Lantern",traveler:"<b>Traveler:</b> 1 Bedroll, 1 Lux Ward, 1 Spyglass, 6 Rations"}},getInexperiencedOption:function(){return this.create.inexperienced?"yes":"no"},getInexperiencedOptions:function(){return{yes:"<b>Yes:</b> Gain 1000 XP. When you complete a Novice Path for the first time, gain 300 XP.\n        When you complete a Journeyman Path for the first time, gain 700 XP.\n        When you complete an Adept Path for the first time, gain 1000 XP.",no:"<b>No:</b> Gain 2500 XP."}}}),methods:{createNavButton:function(){this.showingStats=!1},statsNavButton:function(){this.showingStats=!0},randomNameButton:function(){this.randomNames.length<3&&this.$store.dispatch("other/getRandomNames"),this.randomNames.length>0&&(this.create.name=this.randomNames[0],this.$store.commit("other/shiftRandomNames"))},giftUpdated:function(t){this.create.gift=t,this.create.badAttrs=this.create.badAttrs.filter((function(e){return e!==t})),this.backupCreate()},childAttrsUpdated:function(t){this.create.childAttrs=t,this.create.additionalAttrs=this.create.additionalAttrs.filter((function(e){return!t.includes(e)})),this.create.badAttrs=this.create.badAttrs.filter((function(e){return!t.includes(e)})),this.backupCreate()},adultAttrsUpdated:function(t){this.create.adultAttrs=t,this.create.additionalAttrs=this.create.additionalAttrs.filter((function(e){return!t.includes(e)})),this.create.badAttrs=this.create.badAttrs.filter((function(e){return!t.includes(e)})),this.backupCreate()},additionalAttrChoiceUpdated:function(t){this.create.additionalAttrChoice=t,this.create.additionalAttrs=[],this.backupCreate()},additionalAttrsUpdated:function(t){this.create.additionalAttrs=t,this.create.badAttrs=this.create.badAttrs.filter((function(e){return!t.includes(e)})),this.backupCreate()},badAttrsUpdated:function(t){this.create.badAttrs=t,this.backupCreate()},grate1Updated:function(t){this.create.grate1=t,this.backupCreate()},grate3Updated:function(t){this.create.grate3=t,this.backupCreate()},sideItemUpdated:function(t){this.create.sideItem=t,this.backupCreate()},rememberItemUpdated:function(t){this.create.rememberItem=t,this.backupCreate()},outfitUpdated:function(t){this.create.outfit=t,this.backupCreate()},itemSetUpdated:function(t){this.create.itemSet=t,this.backupCreate()},experienceUpdated:function(t){this.create.inexperienced="yes"===t,this.backupCreate()},isValidAttribute:function(t){return S["a"].includes(t)},calculateAttribute:function(t){if(!this.isValidAttribute(t))return 0;var e=0;this.create.gift===t&&(e+=2),this.create.childAttrs.includes(t)&&e++,this.create.adultAttrs.includes(t)&&e++,this.create.additionalAttrs.includes(t)&&e++,this.create.badAttrs.includes(t)&&e--,this.create.grate1.includes(t)&&e--,this.create.grate3.includes(t)&&e++;var a={painful:"str",sharp:"dex",quick:"per",useful:"wis",eat:"str",read:"int"};a[this.create.sideItem]===t&&e++,this.showRememberOptions&&this.create.rememberItem===t&&e++;var i={fashionable:"cha",functional:"agi"};return i[this.create.outfit]===t&&e++,e},backupCreate:function(){localStorage.setItem(S["c"],JSON.stringify(this.create))},createCharacterButton:function(){if(""!==this.createCharacter.name){var t=this.createCharacter;this.$store.dispatch("character/createCharacter",{character:t,redirectToCharacter:!0})}},clearCharacter:function(){localStorage.removeItem(S["c"]),this.$router.push({name:"Create"})}}},y=A,w=(a("96d2"),Object(v["a"])(y,c,o,!1,null,"8a632cc8",null)),B=w.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("div",{staticClass:"mediumPageWidth"},[a("h1",{staticClass:"centeredText"},[t._v("IMPORT CHARACTER")]),a("h2",[t._v("Copy in details from your Character Stats")]),a("label",{attrs:{for:"import-name"}},[t._v("Character name:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.character.name,expression:"character.name"}],staticClass:"input inputMargin",attrs:{type:"text",name:"name",placeholder:"Bilbo Baggins",id:"import-name"},domProps:{value:t.character.name},on:{blur:t.backupImport,input:function(e){e.target.composing||t.$set(t.character,"name",e.target.value)}}}),a("label",[t._v("Select gift:")]),a("RadioButtonSelection",{staticClass:"inputMargin",attrs:{options:t.getGiftsSelection,selected:t.character.gift},on:{selectedUpdated:t.giftUpdated}}),a("label",[t._v("Attributes:")]),a("div",{staticClass:"attributeInputContainer inputMargin"},t._l(t.validAttributes,(function(e){return a("div",{key:e,staticClass:"attributeInput"},[a("label",{staticClass:"attributeName",attrs:{for:"import"+e}},[t._v(" "+t._s(e.toUpperCase())+": ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.character[e],expression:"character[attr]"}],staticClass:"input",attrs:{type:"number",placeholder:"0",id:"import"+e},domProps:{value:t.character[e]},on:{blur:t.backupImport,input:function(a){a.target.composing||t.$set(t.character,e,a.target.value)}}})])})),0),a("label",{attrs:{for:"import-hp"}},[t._v("Max HP:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.character.maxHp,expression:"character.maxHp"}],staticClass:"input inputMargin",attrs:{type:"number",placeholder:"0",id:"import-hp"},domProps:{value:t.character.maxHp},on:{blur:t.backupImport,input:function(e){e.target.composing||t.$set(t.character,"maxHp",e.target.value)}}}),a("label",{attrs:{for:"import-mp"}},[t._v("Max MP:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.character.maxMp,expression:"character.maxMp"}],staticClass:"input inputMargin",attrs:{type:"number",placeholder:"0",id:"import-mp"},domProps:{value:t.character.maxMp},on:{blur:t.backupImport,input:function(e){e.target.composing||t.$set(t.character,"maxMp",e.target.value)}}}),a("label",{attrs:{for:"import-vim"}},[t._v("Max Vim:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.character.maxVim,expression:"character.maxVim"}],staticClass:"input inputMargin",attrs:{type:"number",placeholder:"0",id:"import-vim"},domProps:{value:t.character.maxVim},on:{blur:t.backupImport,input:function(e){e.target.composing||t.$set(t.character,"maxVim",e.target.value)}}}),a("label",{attrs:{for:"import-hero"}},[t._v("Current Hero Points:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.character.hero,expression:"character.hero"}],staticClass:"input inputMargin",attrs:{type:"number",placeholder:"0",id:"import-hero"},domProps:{value:t.character.hero},on:{blur:t.backupImport,input:function(e){e.target.composing||t.$set(t.character,"hero",e.target.value)}}}),a("label",{attrs:{for:"import-hero-max"}},[t._v("Max Hero Points:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.character.maxHero,expression:"character.maxHero"}],staticClass:"input inputMargin",attrs:{type:"number",placeholder:"0",id:"import-hero-max"},domProps:{value:t.character.maxHero},on:{blur:t.backupImport,input:function(e){e.target.composing||t.$set(t.character,"maxHero",e.target.value)}}}),a("label",{attrs:{for:"import-init"}},[t._v("Initiative Bonus:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.character.init,expression:"character.init"}],staticClass:"input inputMargin",attrs:{type:"number",placeholder:"0",id:"import-init"},domProps:{value:t.character.init},on:{blur:t.backupImport,input:function(e){e.target.composing||t.$set(t.character,"init",e.target.value)}}}),a("label",{attrs:{for:"import-speed"}},[t._v("Speed:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.character.speed,expression:"character.speed"}],staticClass:"input inputMargin",attrs:{type:"number",placeholder:"0",id:"import-speed"},domProps:{value:t.character.speed},on:{blur:t.backupImport,input:function(e){e.target.composing||t.$set(t.character,"speed",e.target.value)}}}),a("label",{attrs:{for:"import-armor"}},[t._v("Armor:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.character.armor,expression:"character.armor"}],staticClass:"input inputMargin",attrs:{type:"number",placeholder:"0",id:"import-armor"},domProps:{value:t.character.armor},on:{blur:t.backupImport,input:function(e){e.target.composing||t.$set(t.character,"armor",e.target.value)}}}),a("label",{attrs:{for:"import-xp"}},[t._v("Total XP:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.character.xp,expression:"character.xp"}],staticClass:"input inputMargin",attrs:{type:"number",placeholder:"0",id:"import-xp"},domProps:{value:t.character.xp},on:{blur:t.backupImport,input:function(e){e.target.composing||t.$set(t.character,"xp",e.target.value)}}}),a("label",{attrs:{for:"import-sp"}},[t._v("SP:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.character.sp,expression:"character.sp"}],staticClass:"input inputMargin",attrs:{type:"number",placeholder:"0",id:"import-sp"},domProps:{value:t.character.sp},on:{blur:t.backupImport,input:function(e){e.target.composing||t.$set(t.character,"sp",e.target.value)}}}),a("p",[t._v("You can import items and abilities after you create the character.")]),a("h2",[t._v("Import your Character")]),a("p",[t._v(' Click the "Create Character" button to officially create the character. ')]),a("p",[t._v(' Click the "Clear Character" button to delete this character and start again. ')]),a("div",{staticClass:"alignRow gap wrap split mt-8 mb-128"},[a("button",{staticClass:"btn roundedButton",on:{click:function(e){return t.createCharacterButton()}}},[a("div",{staticClass:"btnContents"},[t._v("Import Character")])]),a("ConfirmSelectionButton",{attrs:{defaultText:"Clear Character"},on:{secondClick:t.clearCharacter}})],1)],1)])},I=[],M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.clickedOnce?a("button",{staticClass:"btn basicBtn",on:{click:function(e){return t.firstClick()}}},[a("div",{staticClass:"basicBtnContents"},[t._v(" "+t._s(t.defaultText)+" ")])]):a("button",{staticClass:"btn basicBtn",on:{click:function(e){return t.secondClick()}}},[a("div",{staticClass:"basicBtnContents"},[t._v("Are you sure?")])])])},R=[],O={name:"ConfirmSelectionButton",props:{defaultText:String},data:function(){return{clickedOnce:!0}},methods:{firstClick:function(){this.clickedOnce=!1},secondClick:function(){this.$emit("secondClick")}}},P=O,$=Object(v["a"])(P,M,R,!1,null,null,null),U=$.exports,T={name:"ImportFlow",components:{RadioButtonSelection:_["a"],ConfirmSelectionButton:U},data:function(){return{character:{name:"",gift:"None",agi:"",cha:"",dex:"",int:"",per:"",spi:"",str:"",tek:"",wis:"",maxHp:"",maxMp:"",maxVim:"",hero:"",maxHero:"",armor:"",init:"",speed:"",xp:"",sp:""}}},beforeMount:function(){var t=localStorage.getItem(S["b"]);if(t)try{var e=JSON.parse(t);this.character=e}catch(a){localStorage.removeItem(S["b"])}},computed:{getGiftsSelection:function(){return{Alertness:"Alertness, The Gift of Perception",Craft:"Craft, The Gift of Technology",Alacrity:"Alacrity, the Gift of Agility",Finesse:"Finesse, The Gift of Dexterity",Mind:"Mind, The Gift of Intelligence",Magic:"Magic, The Gift of Spirit",Rage:"Rage, The Gift of Strength",Science:"Science, The Gift of Wisdom",Charm:"Charm, The Gift of Charisma",None:"Normality, the Lack of a Gift"}},validAttributes:function(){return S["a"]}},methods:{parseNumber:function(t){var e=parseInt(t);return isNaN(e)?0:e},backupImport:function(){localStorage.setItem(S["b"],JSON.stringify(this.character))},giftUpdated:function(t){this.character.gift=t,this.backupImport()},clearCharacter:function(){localStorage.removeItem(S["b"]),this.$router.push({name:"Create"})},createCharacterButton:function(){if(""!==this.character.name){var t={name:this.character.name,agi:this.parseNumber(this.character.agi),cha:this.parseNumber(this.character.cha),dex:this.parseNumber(this.character.dex),int:this.parseNumber(this.character.int),per:this.parseNumber(this.character.per),spi:this.parseNumber(this.character.spi),str:this.parseNumber(this.character.str),tek:this.parseNumber(this.character.tek),wis:this.parseNumber(this.character.wis),hp:this.parseNumber(this.character.maxHp),maxHp:this.parseNumber(this.character.maxHp),mp:this.parseNumber(this.character.maxMp),maxMp:this.parseNumber(this.character.maxMp),vim:this.parseNumber(this.character.maxVim),maxVim:this.parseNumber(this.character.maxVim),hero:this.parseNumber(this.character.hero),maxHero:this.parseNumber(this.character.maxHero),armor:this.parseNumber(this.character.armor),init:this.parseNumber(this.character.init),speed:this.parseNumber(this.character.speed),xp:this.parseNumber(this.character.xp),sp:this.parseNumber(this.character.sp)};this.clearCharacter(),this.$store.dispatch("character/createCharacter",{character:t,redirectToCharacter:!0})}}}},E=T,G=(a("1523"),Object(v["a"])(E,N,I,!1,null,"13e3c649",null)),H=G.exports,F="new",W="import",D={name:"Create",components:{NewFlow:B,ImportFlow:H},beforeMount:function(){this.isLoggedIn||this.$router.push({name:"Home"})},computed:Object(s["a"])(Object(s["a"])({},Object(n["e"])(["isLoggedIn"])),{},{isNewSection:function(){return this.$route.params.section===F},isImportSection:function(){return this.$route.params.section===W}})},L=D,V=(a("5e5b"),Object(v["a"])(L,i,r,!1,null,"be6aa000",null));e["default"]=V.exports},ecc1:function(t,e,a){"use strict";a("4771")},f805:function(t,e,a){"use strict";a("15e8")}}]);
//# sourceMappingURL=create.f30bc4a3.js.map