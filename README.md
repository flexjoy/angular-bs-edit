# angular-bs-edit

Angular-bs-edit is a set of AngularJS directives for inline editing in the Bootstrap style. The directives are:

- [bseText](#bseText)
- [bseSelect](#bseSelect)
- [bseTextarea](#bseTextarea)
- [bseDate](#bseDate)
- [bseCheckbox](#bseCheckbox)  

## Requirements

- [Bootstrap 3](http://getbootstrap.com/)
- [AngularJS 1.x](https://angularjs.org/)
- [Bootstrap-datepicker 1.6.1+](https://github.com/eternicode/bootstrap-datepicker) (optional for bseDate only)

## Quick start

Several quick start options are available:

- Download the latest [release](https://github.com/flexjoy/angular-bs-edit/archive/master.zip)
- Clone the repo: `git clone https://github.com/flexjoy/angular-bs-edit.git`.
- Install with Bower: `bower install angular-bs-edit`.
- Use [Bower WebJars](http://www.webjars.org/bower) dependency.

## What's included

```
angular-bs-edit/
  dist/
    ├─css/
  	│  ├─angular-bs-edit.css
  	│  └─angular-bs-edit.min.css
    └─js/
       ├─angular-bs-edit.js
       └─angular-bs-edit.min.js
```

## Usage

######Load CSS and JS

```html
<link href="dist/css/angular-bs-edit.min.css" rel="stylesheet">
...
<script src="dist/js/angular-bs-edit.min.js"></script>
```

######Add "angular-bs-edit" to dependencies 

```javascript
angular.module('MyApp', ['bs-edit']);
```

## Documentation

### bseText

######Basic directive

```html
<div bse-text="model"></div>
```

######API

Attribute|Type|Required|Default|Description
---|---|---|---|---
bse-text|`model`|yes||Angular model
name|`string`|no||Form field name
empty|`string`|no|`empty`|Displayed value for empty field

### bseSelect

######Basic directive

```html
<div bse-select="model" onshow="getList()"></div>
```

######API

Attribute|Type|Required|Default|Description
---|---|---|---|---
bse-select|`model`|yes||Angular model. As object must have two required fields: `id` and `name` 
onshow|`function`|yes||Function returns an array. Must return a `$promise`
name|`string`|no||Form field name
empty|`string`|no|`empty`|Displayed value for empty field

### bseTextarea

######Basic directive

```html
<div bse-textarea="model"></div>
```

######API

Attribute|Type|Required|Default|Description
---|---|---|---|---
bse-textarea|`model`|yes||Angular model
name|`string`|no||Form field name
empty|`string`|no|`empty`|Displayed value for empty field

### bseDate

######Basic directive

```html
<div bse-date="model"></div>
```

######API

Attribute|Type|Required|Default|Description
---|---|---|---|---
bse-date|`model`|yes||Angular model. Initial value can be timestamp or javascript date. Return date in javascript date format
locale|`model`|no|`en`|Angular model contains language in accordance with the [bootstrap-datepicker language](https://bootstrap-datepicker.readthedocs.io/en/stable/options.html#language)
name|`string`|no||Form field name
empty|`string`|no|`empty`|Displayed value for empty field

### bseCheckbox

######Basic directive

```html
<div bse-checkbox="model"></div>
```

######API

Attribute|Type|Required|Default|Description
---|---|---|---|---
bse-checkbox|`model`|yes||Angular model
name|`string`|no||Form field name
