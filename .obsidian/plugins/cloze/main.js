/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => ClozePlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian3 = require("obsidian");

// src/lang/en.ts
var langs = {
  add_cloze: "Create cloze",
  add_cloze_with_hint: "Create cloze with hint",
  remove_cloze: "Remove cloze",
  toggle_cloze: "Toggle all clozes",
  setting_selector_tag: "Required tag",
  setting_selector_tag_desc: "If you provide a tag here, the plugin will only activate on notes with that tag i.e. #cloze.",
  setting_hide_by_default: "Hide by default",
  setting_hide_by_default_desc: "Enable this setting, all clozes will be hidden by default when reading the page. \u{1F648}",
  setting_auto_convert: "Auto Convert",
  setting_highlight: "Highlighted text",
  setting_highlight_desc: "Enable this setting, all ==highlighted texts== will be converted to cloze.",
  setting_bold: "Bolded text",
  setting_bold_desc: "Enable this setting, all **bolded texts** will be converted to cloze.",
  setting_underline: "Underlined text",
  setting_underline_desc: "Enable this setting, all <u>underlined texts</u> will be converted to cloze.",
  setting_editor_menu: "Editor menu",
  setting_editor_menu_add_cloze: "Display add cloze button",
  setting_editor_menu_add_cloze_with_hint: "Display add cloze with hint button",
  setting_editor_menu_remove_cloze: "Display remove cloze button",
  setting_custom_setting: "Custom settings",
  setting_fixed_cloze_width: "Fixed cloze width",
  setting_fixed_cloze_width_desc: "Enable this setting, clozes will have the same default width, which helps to ensure that the original text length is not revealed.",
  setting_contact: "Thank you for using Cloze! Any feedback is welcomed"
};
var en_default = langs;

// src/lang/zh.ts
var langs2 = {
  add_cloze: "\u6DFB\u52A0\u586B\u7A7A",
  add_cloze_with_hint: "\u6DFB\u52A0\u5E26\u63D0\u793A\u7684\u586B\u7A7A",
  remove_cloze: "\u79FB\u9664\u586B\u7A7A",
  toggle_cloze: "\u663E/\u9690\u6240\u6709\u586B\u7A7A",
  setting_selector_tag: "\u4F5C\u7528\u6807\u7B7E",
  setting_selector_tag_desc: "\u8BE5\u63D2\u4EF6\u5C06\u4EC5\u4F5C\u7528\u4E8E\u5E26\u6709\u8BE5\u6807\u7B7E\u7684\u7B14\u8BB0\u4E0A\uFF0C\u4E3A\u7A7A\u5219\u4F5C\u7528\u4E8E\u6240\u6709\u7B14\u8BB0 i.e. #cloze\u3002",
  setting_hide_by_default: "\u9ED8\u8BA4\u9690\u85CF",
  setting_hide_by_default_desc: "\u542F\u7528\u6B64\u8BBE\u7F6E\u540E\uFF0C\u6253\u5F00\u9875\u9762\u65F6\u6240\u6709\u586B\u7A7A\u5185\u5BB9\u5C06\u9ED8\u8BA4\u9690\u85CF\u3002\u{1F648}",
  setting_auto_convert: "\u81EA\u52A8\u8F6C\u6362",
  setting_highlight: "\u9AD8\u4EAE\u6587\u5B57",
  setting_highlight_desc: "\u542F\u7528\u6B64\u8BBE\u7F6E\u540E\uFF0C\u6240\u6709==\u9AD8\u4EAE\u6587\u5B57==\u4E5F\u5C06\u8F6C\u6362\u4E3A\u586B\u7A7A\u3002",
  setting_bold: "\u7C97\u4F53\u6587\u5B57",
  setting_bold_desc: "\u542F\u7528\u6B64\u8BBE\u7F6E\u540E\uFF0C\u6240\u6709**\u7C97\u4F53\u6587\u5B57**\u4E5F\u5C06\u8F6C\u6362\u4E3A\u586B\u7A7A\u3002",
  setting_underline: "\u4E0B\u5212\u7EBF\u6587\u5B57",
  setting_underline_desc: "\u542F\u7528\u6B64\u8BBE\u7F6E\u540E\uFF0C\u6240\u6709<u>\u4E0B\u5212\u7EBF\u6587\u5B57</u>\u4E5F\u5C06\u8F6C\u6362\u4E3A\u586B\u7A7A\u3002",
  setting_editor_menu: "\u7F16\u8F91\u5668\u83DC\u5355",
  setting_editor_menu_add_cloze: "\u663E\u793A\u6DFB\u52A0\u586B\u7A7A\u6309\u94AE",
  setting_editor_menu_add_cloze_with_hint: "\u663E\u793A\u6DFB\u52A0\u5E26\u63D0\u793A\u7684\u586B\u7A7A\u6309\u94AE",
  setting_editor_menu_remove_cloze: "\u663E\u793A\u79FB\u9664\u586B\u7A7A\u6309\u94AE",
  setting_custom_setting: "\u81EA\u5B9A\u4E49\u8BBE\u7F6E",
  setting_fixed_cloze_width: "\u56FA\u5B9A\u586B\u7A7A\u5BBD\u5EA6",
  setting_fixed_cloze_width_desc: "\u542F\u7528\u6B64\u8BBE\u7F6E\u540E\uFF0C\u6240\u6709\u586B\u7A7A\u7684\u5BBD\u5EA6\u9ED8\u8BA4\u76F8\u540C\uFF08\u53EF\u907F\u514D\u900F\u9732\u539F\u6587\u5B57\u957F\u5EA6\uFF09\u3002",
  setting_contact: "\u8C22\u8C22\u4F60\u7684\u4F7F\u7528~ \u6B22\u8FCE\u53CD\u9988\uFF01\u6233\u8FD9\u91CC\uFF1A"
};
var zh_default = langs2;

// src/lang/index.ts
var langs3 = {
  en: en_default,
  zh: zh_default
};
var language = window.localStorage.getItem("language") || "en";
var lang_default = langs3[language] || en_default;

// src/settings/settingData.ts
var DEFAULT_SETTINGS = {
  defaultHide: true,
  selectorTag: "#",
  includeHighlighted: false,
  includeUnderlined: false,
  includeBolded: false,
  fixedClozeWidth: false,
  editorMenuAddCloze: true,
  editorMenuAddClozeWithHint: true,
  editorMenuRemoveCloze: true
};
var settingData_default = DEFAULT_SETTINGS;

// src/settings/settingTab.ts
var import_obsidian = require("obsidian");
var SettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h1", { text: "Cloze" });
    containerEl.createEl("h2", { text: lang_default.setting_auto_convert });
    new import_obsidian.Setting(containerEl).setName(lang_default.setting_highlight).setDesc(lang_default.setting_highlight_desc).addToggle((toggle) => toggle.setValue(this.plugin.settings.includeHighlighted).onChange((value) => {
      this.plugin.settings.includeHighlighted = value;
      this.plugin.saveSettings();
    }));
    new import_obsidian.Setting(containerEl).setName(lang_default.setting_bold).setDesc(lang_default.setting_bold_desc).addToggle((toggle) => toggle.setValue(this.plugin.settings.includeBolded).onChange((value) => {
      this.plugin.settings.includeBolded = value;
      this.plugin.saveSettings();
    }));
    new import_obsidian.Setting(containerEl).setName(lang_default.setting_underline).setDesc(lang_default.setting_underline_desc).addToggle((toggle) => toggle.setValue(this.plugin.settings.includeUnderlined).onChange((value) => {
      this.plugin.settings.includeUnderlined = value;
      this.plugin.saveSettings();
    }));
    containerEl.createEl("h2", { text: lang_default.setting_custom_setting });
    new import_obsidian.Setting(containerEl).setName(lang_default.setting_selector_tag).setDesc(lang_default.setting_selector_tag_desc).addText((text) => text.setValue(this.plugin.settings.selectorTag).onChange(async (value) => {
      this.plugin.settings.selectorTag = this.sanitizeTag(value);
      await this.plugin.saveSettings();
    }));
    new import_obsidian.Setting(containerEl).setName(lang_default.setting_fixed_cloze_width).setDesc(lang_default.setting_fixed_cloze_width_desc).addToggle((toggle) => toggle.setValue(this.plugin.settings.fixedClozeWidth).onChange((value) => {
      this.plugin.settings.fixedClozeWidth = value;
      this.plugin.saveSettings();
    }));
    new import_obsidian.Setting(containerEl).setName(lang_default.setting_hide_by_default).setDesc(lang_default.setting_hide_by_default_desc).addToggle((toggle) => toggle.setValue(this.plugin.settings.defaultHide).onChange((value) => {
      this.plugin.settings.defaultHide = value;
      this.plugin.saveSettings();
    }));
    containerEl.createEl("h2", { text: lang_default.setting_editor_menu });
    new import_obsidian.Setting(containerEl).setName(lang_default.setting_editor_menu_add_cloze).addToggle((toggle) => toggle.setValue(this.plugin.settings.editorMenuAddCloze).onChange((value) => {
      this.plugin.settings.editorMenuAddCloze = value;
      this.plugin.saveSettings();
    }));
    new import_obsidian.Setting(containerEl).setName(lang_default.setting_editor_menu_add_cloze_with_hint).addToggle((toggle) => toggle.setValue(this.plugin.settings.editorMenuAddClozeWithHint).onChange((value) => {
      this.plugin.settings.editorMenuAddClozeWithHint = value;
      this.plugin.saveSettings();
    }));
    new import_obsidian.Setting(containerEl).setName(lang_default.setting_editor_menu_remove_cloze).addToggle((toggle) => toggle.setValue(this.plugin.settings.editorMenuRemoveCloze).onChange((value) => {
      this.plugin.settings.editorMenuRemoveCloze = value;
      this.plugin.saveSettings();
    }));
    containerEl.createEl("p", {
      text: lang_default.setting_contact + " ",
      cls: "setting-item-description"
    }).createEl("a", {
      text: "here",
      href: "https://github.com/DearVikki/obsidian-cloze-plugin/issues"
    });
  }
  // Check and clean up tags that are not (what I understand to be) well formed Obsidian tags.
  sanitizeTag(tagInput) {
    const allowedCharacters = /^[a-zA-Z0-9-_]+$/;
    const tagBody = tagInput.startsWith("#") ? tagInput.slice(1) : tagInput;
    if (allowedCharacters.test(tagBody)) {
      return "#" + tagBody;
    }
    const sanitizedTagBody = tagBody.replace(/[^a-zA-Z0-9-_]/g, "_");
    return "#" + sanitizedTagBody;
  }
};
var settingTab_default = SettingTab;

// src/components/modal-hint.ts
var import_obsidian2 = require("obsidian");
var HintModal = class extends import_obsidian2.Modal {
  constructor(app, clozedText, onSubmit) {
    super(app);
    this.clozedText = clozedText;
    this.onSubmit = onSubmit;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.createEl("p", { text: "Clozed text: " + this.clozedText });
    new import_obsidian2.Setting(contentEl).setClass("modal-hint-setting").setName("Hint text: ").addText((text) => text.onChange((value) => {
      this.result = value;
    }));
    new import_obsidian2.Setting(contentEl).addButton((btn) => btn.setButtonText("Submit").setCta().onClick(() => {
      this.close();
      this.onSubmit(this.result);
    }));
  }
  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
};

// src/main.ts
var ATTRS = {
  hide: "data-cloze-hide",
  hint: "data-cloze-hint",
  content: "data-cloze-content"
};
var CLASSES = {
  cloze: "cloze",
  highlight: "cloze-highlight",
  bold: "cloze-bold",
  underline: "cloze-underline",
  hint: "cloze-hint",
  fixedWidth: "cloze-fixed-width"
};
var ClozePlugin = class extends import_obsidian3.Plugin {
  constructor() {
    super(...arguments);
    this.isAllHide = true;
    this.clozeSelector = () => {
      const selectors = [".cloze-span"];
      if (this.settings.includeHighlighted) {
        selectors.push("mark");
        selectors.push(".cm-highlight");
      }
      if (this.settings.includeUnderlined) {
        selectors.push("u");
      }
      if (this.settings.includeBolded) {
        selectors.push("strong");
        selectors.push(".cm-strong");
      }
      return selectors.join(", ");
    };
    this.hideClozeContent = (target) => {
      if (!target.getAttribute(ATTRS.hide)) {
        if (target.getAttribute(ATTRS.hint)) {
          target.setAttribute(ATTRS.content, target.innerHTML);
          target.innerHTML = target.getAttribute(ATTRS.hint) || "";
          target.removeAttribute(ATTRS.hint);
          target.classList.add(CLASSES.hint);
        }
        target.setAttribute(ATTRS.hide, "true");
      }
    };
    this.showClozeContent = (target) => {
      if (target.getAttribute(ATTRS.hide)) {
        if (target.getAttribute(ATTRS.content)) {
          target.setAttribute(ATTRS.hint, target.innerHTML);
          target.innerHTML = target.getAttribute(ATTRS.content) || "";
          target.removeAttribute(ATTRS.content);
          target.classList.remove(CLASSES.hint);
        }
        target.removeAttribute(ATTRS.hide);
      }
    };
    this.addCloze = (editor, needHint) => {
      const currentStr = editor.getSelection();
      const content = currentStr.replace(/<span class="cloze-span">(.*?)<\/span>/g, "$1");
      if (needHint) {
        new HintModal(this.app, content, (hint) => {
          const newStr = `<span class="cloze-span" data-cloze-hint="${hint}">` + content + "</span>";
          editor.replaceSelection(newStr);
          editor.blur();
        }).open();
      } else {
        const newStr = '<span class="cloze-span">' + content + "</span>";
        editor.replaceSelection(newStr);
        editor.blur();
      }
    };
    this.removeCloze = (editor) => {
      const currentStr = editor.getSelection();
      const newStr = currentStr.replace(/<span.*?class="cloze-span".*?>(.*?)<\/span>/g, "$1");
      editor.replaceSelection(newStr);
    };
  }
  async onload() {
    console.log("load cloze plugin");
    await this.loadSettings();
    this.addSettingTab(new settingTab_default(this.app, this));
    this.initRibbon();
    this.registerDomEvent(document, "click", (event) => {
      if (this.isPreviewMode() && this.checkTags()) {
        this.toggleHide(event.target);
      }
    });
    this.initEditorMenu();
    this.initCommand();
    this.initMarkdownPostProcessor();
  }
  initRibbon() {
    this.addRibbonIcon("fish", lang_default.toggle_cloze, (evt) => {
      this.toggleAllHide(document, !this.isAllHide);
      this.isAllHide = !this.isAllHide;
    });
  }
  initEditorMenu() {
    this.registerEvent(
      this.app.workspace.on("editor-menu", (menu, editor) => {
        const selection = editor.getSelection();
        if (selection && this.checkTags()) {
          if (this.settings.editorMenuAddCloze) {
            menu.addItem((item) => {
              item.setTitle(lang_default.add_cloze).onClick((e) => {
                this.addCloze(editor);
              });
            });
          }
          if (this.settings.editorMenuAddClozeWithHint) {
            menu.addItem((item) => {
              item.setTitle(lang_default.add_cloze_with_hint).onClick((e) => {
                this.addCloze(editor, true);
              });
            });
          }
          if (this.settings.editorMenuRemoveCloze) {
            menu.addItem((item) => {
              item.setTitle(lang_default.remove_cloze).onClick((e) => {
                this.removeCloze(editor);
              });
            });
          }
        }
      })
    );
  }
  initCommand() {
    this.addCommand({
      id: "add-cloze",
      name: lang_default.add_cloze,
      icon: "fish",
      editorCheckCallback: (checking, editor, ctx) => {
        const selection = editor.getSelection();
        if (selection && this.checkTags() && !checking) {
          this.addCloze(editor);
          return true;
        } else {
          return false;
        }
      }
    });
    this.addCommand({
      id: "add-cloze-with-hint",
      name: lang_default.add_cloze_with_hint,
      icon: "fish-symbol",
      editorCheckCallback: (checking, editor, ctx) => {
        const selection = editor.getSelection();
        if (selection && this.checkTags() && !checking) {
          this.addCloze(editor, true);
          return true;
        } else {
          return false;
        }
      }
    });
    this.addCommand({
      id: "remove-cloze",
      name: lang_default.remove_cloze,
      icon: "fish-off",
      editorCheckCallback: (checking, editor, ctx) => {
        const selection = editor.getSelection();
        if (selection && this.checkTags() && !checking) {
          this.removeCloze(editor);
          return true;
        } else {
          return false;
        }
      }
    });
  }
  initMarkdownPostProcessor() {
    this.registerMarkdownPostProcessor((element, context) => {
      if (this.checkTags()) {
        if (this.settings.fixedClozeWidth) {
          const containerEl = context.containerEl;
          if (containerEl) {
            containerEl.classList.add(CLASSES.fixedWidth);
          } else {
            new import_obsidian3.Notice("Cloze plugin: No containerEl.");
          }
        }
        element.querySelectorAll(this.clozeSelector()).forEach((el) => el.classList.add(CLASSES.cloze));
        this.toggleAllHide(element, this.isAllHide);
      }
    });
  }
  isPreviewMode() {
    var _a;
    return ((_a = this.app.workspace.getActiveViewOfType(import_obsidian3.MarkdownView)) == null ? void 0 : _a.getMode()) === "preview";
  }
  // Extract and verify tags - works in both preview and edit mode
  checkTags() {
    var _a;
    if (this.settings.selectorTag === "" || this.settings.selectorTag === "#") {
      return true;
    }
    const activeView = this.app.workspace.getActiveViewOfType(import_obsidian3.MarkdownView);
    if (activeView) {
      const { app, file } = activeView;
      if (file) {
        const cachedMetadata = app.metadataCache.getFileCache(file);
        const tags = ((cachedMetadata == null ? void 0 : cachedMetadata.tags) || []).map((t) => t.tag);
        const frontmatterTags = ((_a = cachedMetadata == null ? void 0 : cachedMetadata.frontmatter) == null ? void 0 : _a.tags) || [];
        return [...frontmatterTags, ...tags].some((t) => {
          if (!t.startsWith("#")) {
            t = "#" + t;
          }
          return t.toLowerCase() === this.settings.selectorTag.toLowerCase();
        });
      }
    }
    return false;
  }
  async loadSettings() {
    this.settings = Object.assign({}, settingData_default, await this.loadData());
    this.isAllHide = this.settings.defaultHide;
  }
  async saveSettings() {
    await this.saveData(this.settings);
    this.isAllHide = this.settings.defaultHide;
  }
  toggleHide(target) {
    if (target.matches(this.clozeSelector())) {
      if (target.getAttribute(ATTRS.hide)) {
        this.showClozeContent(target);
      } else {
        this.hideClozeContent(target);
      }
    }
  }
  toggleAllHide(dom = document, hide) {
    if (this.checkTags()) {
      const marks = dom.querySelectorAll(this.clozeSelector());
      if (hide) {
        marks.forEach((mark) => {
          this.hideClozeContent(mark);
        });
      } else {
        marks.forEach((mark) => {
          this.showClozeContent(mark);
        });
      }
    }
  }
};
