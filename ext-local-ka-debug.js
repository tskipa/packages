/**
 Georgian Translation by tskipa 21-01-2015 v1.0
 */
Ext.onReady(function() {
    if (Ext.Date) {
        Ext.Date.dayNames = [
            'კვირა',
            'ორშაბათი',
            'სამშაბათი',
            'ოთხშაბათი',
            'ხუთშაბათი',
            'პარასკევი',
            'შაბათი'
        ];
        Ext.Date.monthNames = [
            'იანვარი',
            'თებერვალი',
            'მარტი',
            'აპრილი',
            'მაისი',
            'ივნისი',
            'ივლისი',
            'აგვისტო',
            'სექტემბერი',
            'ოქტომბერი',
            'ნოემბერი',
            'დეკემბერი'
        ];
        Ext.Date.getShortDayName = function(day) {
            return Ext.Date.dayNames[day].substring(0, 3);
        };
        Ext.Date.parseCodes.S.s = "(?:st|nd|rd|th)";
    }
    if (Ext.util && Ext.util.Format) {
        Ext.apply(Ext.util.Format, {
            thousandSeparator: ',',
            decimalSeparator: '.',
            currencySign: '/10da',
            // Georgian Lari Symbol. On July 18, 2014 a request letter was to the Unicode Consortium, to register the symbol in Currency Symbols block of the Unicode Standard. Proposed character is U+20BE
            dateFormat: 'd.m.Y'
        });
    }
});
Ext.define("Ext.locale.ge.data.validator.Bound", {
    override: "Ext.data.validator.Bound",
    emptyMessage: "მნიშვნელობა მოითხოვება"
});
Ext.define("Ext.locale.ge.data.validator.Email", {
    override: "Ext.data.validator.Email",
    message: "არასწორი email ფორმატი"
});
Ext.define("Ext.locale.ge.data.validator.Exclusion", {
    override: "Ext.data.validator.Exclusion",
    message: "მნიშვნელობა გამორიცხულია"
});
Ext.define("Ext.locale.ge.data.validator.Format", {
    override: "Ext.data.validator.Format",
    message: "არასწორი ფორმატი"
});
Ext.define("Ext.locale.ge.data.validator.Inclusion", {
    override: "Ext.data.validator.Inclusion",
    message: "მიუღებელი მნიშვნელობა"
});
Ext.define("Ext.locale.ge.data.validator.Length", {
    override: "Ext.data.validator.Length",
    minOnlyMessage: "სიგრძე არანაკლებია {0}-ზე",
    maxOnlyMessage: "სიგრძე მეტია {0}-ზე",
    bothMessage: "სიგრძე {0} და {1} მნიშვნელობათა შორისაა"
});
Ext.define("Ext.locale.ge.data.validator.Presence", {
    override: "Ext.data.validator.Presence",
    message: "მნიშვნელობა მოითხოვება"
});
Ext.define("Ext.locale.ge.data.validator.Range", {
    override: "Ext.data.validator.Range",
    minOnlyMessage: "მეტია ან ტოლი {0}-ზე",
    maxOnlyMessage: "ნაკლებია ან ტოლი {0}-ზე",
    bothMessage: "{0} და {1} შორისაა",
    nanMessage: "უნდა იყოს რიცხვი"
});
Ext.define("Ext.locale.ge.grid.plugin.DragDrop", {
    override: "Ext.grid.plugin.DragDrop",
    dragText: "{0} მონიშნული სტრიქონი"
});
// changing the msg text below will affect the LoadMask
Ext.define("Ext.locale.ge.view.AbstractView", {
    override: "Ext.view.AbstractView",
    loadingText: "იტვირთება..."
});
Ext.define("Ext.locale.ge.picker.Date", {
    override: "Ext.picker.Date",
    todayText: 'დღევანდელი',
    minText: 'ეს თარიღი მინიმუმზე ნაკლებია',
    maxText: 'ეს თარიღი მაქსიმუმზე მეტია',
    disabledDaysText: '',
    disabledDatesText: '',
    nextText: 'შემდეგი თვე (Control+Right)',
    prevText: 'წინა თვე (Control+Left)',
    monthYearText: 'თვე და წელი',
    todayTip: '{0} (spacebar)',
    format: 'd.m.Y',
    startDay: 1
});
Ext.define("Ext.locale.ge.picker.Month", {
    override: "Ext.picker.Month",
    okText: '&#160;დიახ&#160;',
    cancelText: 'გაუქმება'
});
Ext.define("Ext.locale.ge.toolbar.Paging", {
    override: "Ext.PagingToolbar",
    afterPageText: '{0} - დან',
    beforePageText: 'გვერდი',
    displayMsg: 'შედეგი {0} - {1}' + '&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;' + '{2} - დან',
    emptyMsg: 'ცხრილი ცარიელია',
    firstText: 'პირველი გვერდი',
    lastText: 'ბოლო გვერდი',
    nextText: 'შემდეგი გვერდი',
    refreshText: 'განახლება',
    prevText: 'წინა გვერდი'
});
Ext.define("Ext.locale.ge.form.Basic", {
    override: "Ext.form.Basic",
    waitTitle: "გთხოვთ, დაიცადოთ..."
});
Ext.define("Ext.locale.ge.form.field.Base", {
    override: "Ext.form.field.Base",
    invalidText: "ფორმატი არასწორია"
});
Ext.define("Ext.locale.ge.form.field.Text", {
    override: "Ext.form.field.Text",
    minLengthText: "ველის მინიმალური სიგრძეა {0}",
    maxLengthText: "ველის მაქსიმალური სიგრძეა {0}",
    blankText: "ველის შევსება აუცილებელია",
    regexText: "",
    emptyText: null
});
Ext.define("Ext.locale.ge.form.field.Number", {
    override: "Ext.form.field.Number",
    decimalPrecision: 2,
    minText: "ველის მინიმალური სიგრძეა {0}",
    maxText: "ველის მაქსიმალური სიგრძეა {0}",
    nanText: "{0} არაა მისაღები რიცხვი"
});
Ext.define("Ext.locale.ge.form.field.Date", {
    override: "Ext.form.field.Date",
    disabledDaysText: "დეაქტივირებულია",
    disabledDatesText: "დეაქტივირებულია",
    minText: "თარიღი მეტი უნდა იყოს {0}-ზე",
    maxText: "თარიღი ნაკლები უნდა იყოს {0}-ზე",
    invalidText: "{0} არაა სწორ ფორმატში - სწორი ფორმატია {1}",
    format: "d/m/y",
    altFormats: "d/m/Y|d-m-y|d-m-Y|d/m|d-m|dm|dmy|dmY|d|Y-m-d"
});
Ext.define("Ext.locale.ge.form.field.ComboBox", {
    override: "Ext.form.field.ComboBox",
    valueNotFoundText: undefined
}, function() {
    Ext.apply(Ext.form.field.ComboBox.prototype.defaultListConfig, {
        loadingText: "იტვირთება..."
    });
});
Ext.define("Ext.locale.ge.form.field.VTypes", {
    override: "Ext.form.field.VTypes",
    emailText: 'ველი უნდა იყოს e-mail ფორმატში: "user@example.com"',
    urlText: 'ველი უნდა იყოს URL ფორმატში: "http:/' + '/www.example.com"',
    alphaText: 'ველი უნდა შეიცავდეს მხოლოდ ასოებს და _',
    alphanumText: 'ველი უნდა შეიცავდეს მხოლოდ ასოებს, რიცხვებს და _'
});
Ext.define("Ext.locale.ge.form.field.HtmlEditor", {
    override: "Ext.form.field.HtmlEditor",
    createLinkText: 'გთხოვთ, შეიყვანეთ მისამართი:'
}, function() {
    Ext.apply(Ext.form.field.HtmlEditor.prototype, {
        buttonTips: {
            bold: {
                title: 'Bold (Ctrl+B)',
                text: 'მონიშნული ტექსტის გამსხვილება.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            italic: {
                title: 'Italic (Ctrl+I)',
                text: 'მონიშნული ტექსტის დახრა.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            underline: {
                title: 'Underline (Ctrl+U)',
                text: 'მონიშნული ტექსტის ხაზგასმა.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            increasefontsize: {
                title: 'Grow Text',
                text: 'ფონტის ზომის გაზრდა.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            decreasefontsize: {
                title: 'Shrink Text',
                text: 'ფონტის ზომის შემცირება.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            backcolor: {
                title: 'Text Highlight Color',
                text: 'მონიშნული ტექსტის განათება.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            forecolor: {
                title: 'Font Color',
                text: 'ფონტის ფერის შეცვლა.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifyleft: {
                title: 'Align Text Left',
                text: 'ტექსტის სწორება მარცხნივ.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifycenter: {
                title: 'Center Text',
                text: 'ტექსტის ცენტრირება.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifyright: {
                title: 'Align Text Right',
                text: 'ტექსტის სწორება მარჯვნივ.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            insertunorderedlist: {
                title: 'Bullet List',
                text: 'სანიშნეები.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            insertorderedlist: {
                title: 'Numbered List',
                text: 'დანომრილი ცხრილი.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            createlink: {
                title: 'Hyperlink',
                text: 'ბმულის შექმნა მონიშნული ტექსტისთვის',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            sourceedit: {
                title: 'Source Edit',
                text: 'კოდის რედაქტირება.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            }
        }
    });
});
Ext.define("Ext.locale.ge.grid.header.Container", {
    override: "Ext.grid.header.Container",
    sortAscText: "დალაგება ზრდადობით",
    sortDescText: "დალაგება კლებადობით",
    columnsText: "სვეტები"
});
Ext.define("Ext.locale.ge.grid.GroupingFeature", {
    override: "Ext.grid.feature.Grouping",
    emptyGroupText: '(ცარიელია)',
    groupByText: 'ველით დაჯგუფება',
    showGroupsText: 'ჯგუფებად ნახვა'
});
Ext.define("Ext.locale.ge.grid.PropertyColumnModel", {
    override: "Ext.grid.PropertyColumnModel",
    nameText: "სახელი",
    valueText: "მნიშვნელობა",
    dateFormat: "j/m/Y",
    trueText: "სწორი",
    falseText: "არასწორი"
});
Ext.define("Ext.locale.ge.grid.BooleanColumn", {
    override: "Ext.grid.BooleanColumn",
    trueText: "სწორი",
    falseText: "არასწორი",
    undefinedText: '&#160;'
});
Ext.define("Ext.locale.ge.grid.NumberColumn", {
    override: "Ext.grid.NumberColumn",
    format: '0,000.00'
});
Ext.define("Ext.locale.ge.grid.DateColumn", {
    override: "Ext.grid.DateColumn",
    format: 'd/m/Y'
});
Ext.define("Ext.locale.ge.form.field.Time", {
    override: "Ext.form.field.Time",
    minText: "დრო მეტი ან ტოლი უნდა იყოს {0}-ზე",
    maxText: "დრო ნაკლები ან ტოლი უნდა იყოს {0}-ზე",
    invalidText: "{0} არაა სწორი დრო",
    format: "g:i A",
    altFormats: "g:ia|g:iA|g:i a|g:i A|h:i|g:i|H:i|ga|ha|gA|h a|g a|g A|gi|hi|gia|hia|g|H"
});
Ext.define("Ext.locale.ge.form.field.File", {
    override: "Ext.form.field.File",
    buttonText: "ნახვა..."
});
Ext.define("Ext.locale.ge.form.CheckboxGroup", {
    override: "Ext.form.CheckboxGroup",
    blankText: "მოითხოვება მინიმუმ ერთი მონიშვნა"
});
Ext.define("Ext.locale.ge.form.RadioGroup", {
    override: "Ext.form.RadioGroup",
    blankText: "მოითხოვება მინიმუმ ერთი მონიშვნა"
});
Ext.define("Ext.locale.ge.window.MessageBox", {
    override: "Ext.window.MessageBox",
    buttonText: {
        ok: "OK",
        cancel: "გაუქმება",
        yes: "დიახ",
        no: "არა"
    }
});
Ext.define("Ext.locale.ge.grid.filters.Filters", {
    override: "Ext.grid.filters.Filters",
    menuFilterText: "ფილტრი"
});
Ext.define("Ext.locale.ge.grid.filters.filter.Boolean", {
    override: "Ext.grid.filters.filter.Boolean",
    yesText: "დიახ",
    noText: "არა"
});
Ext.define("Ext.locale.ge.grid.filters.filter.Date", {
    override: "Ext.grid.filters.filter.Date",
    fields: {
        lt: {
            text: 'წინა'
        },
        gt: {
            text: 'შემდეგი'
        },
        eq: {
            text: ''
        }
    },
    // Defaults to Ext.Date.defaultFormat
    dateFormat: null
});
Ext.define("Ext.locale.ge.grid.filters.filter.List", {
    override: "Ext.grid.filters.filter.List",
    loadingText: "იტვირთება..."
});
Ext.define("Ext.locale.ge.grid.filters.filter.Number", {
    override: "Ext.grid.filters.filter.Number",
    emptyText: "გთხოვთ, შეიყვანეთ რიცხვი..."
});
Ext.define("Ext.locale.ge.grid.filters.filter.String", {
    override: "Ext.grid.filters.filter.String",
    emptyText: "გთხოვთ, შეიყვანეთ ტექსტი..."
});
// This is needed until we can refactor all of the locales into individual files
Ext.define("Ext.locale.ge.Component", {
    override: "Ext.Component"
});

