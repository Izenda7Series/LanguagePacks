/* eslint-disable max-len */
// ----------------------------------------------------------------------
// <copyright file="Izenda.texts.en-US.js" company="Izenda">
//  Copyright (c) 2015 Izenda, Inc.
//  ALL RIGHTS RESERVED
//
//  The entire contents of this file is protected by U.S. and
//  International Copyright Laws. Unauthorized reproduction,
//  reverse-engineering, and distribution of all or any portion of
//  the code contained in this file is strictly prohibited and may
//  result in severe civil and criminal penalties and will be
//  prosecuted to the maximum extent possible under the law.
//
//  RESTRICTIONS
//
//  THIS SOURCE CODE AND ALL RESULTING INTERMEDIATE FILES
//  ARE CONFIDENTIAL AND PROPRIETARY TRADE
//  SECRETS OF IZENDA INC. THE REGISTERED DEVELOPER IS
//  LICENSED TO DISTRIBUTE THE PRODUCT AND ALL ACCOMPANYING .NET
//  CONTROLS AS PART OF AN EXECUTABLE PROGRAM ONLY.
//
//  THE SOURCE CODE CONTAINED WITHIN THIS FILE AND ALL RELATED
//  FILES OR ANY PORTION OF ITS CONTENTS SHALL AT NO TIME BE
//  COPIED, TRANSFERRED, SOLD, DISTRIBUTED, OR OTHERWISE MADE
//  AVAILABLE TO OTHER INDIVIDUALS WITHOUT EXPRESS WRITTEN CONSENT
//  AND PERMISSION FROM IZENDA INC.
//
//  CONSULT THE END USER LICENSE AGREEMENT(EULA FOR INFORMATION ON
//  ADDITIONAL RESTRICTIONS.
//  </copyright>
// ----------------------------------------------------------------------
/**
 * English localization data
 */

import localizer from 'share/localization/Izenda.Localizer';

localizer.registerLanguage(
  {
    // MODEL
    MODEL_LABEL_TABLE: 'Table',
    MODEL_LABEL_VIEW: 'View',
    MODEL_LABEL_PROCEDURE: 'Stored Procedure',
    MODEL_LABEL_FUNCTION: 'Function',

    // CONTEXT MENU
    CONTEXT_MENU_LABEL_SYSTEM_DB_LICENSE: 'System DB & License',
    CONTEXT_MENU_LABEL_TENANT_SETUP: 'Tenant Setup',
    CONTEXT_MENU_LABEL_DATA_SETUP: 'Data Setup',
    CONTEXT_MENU_LABEL_CONNECTION_STRING: 'Data Connectors',
    CONTEXT_MENU_LABEL_DATA_MODEL: 'Data Model',
    CONTEXT_MENU_LABEL_ADVANCED_SETTINGS: 'Advanced Settings',
    CONTEXT_MENU_LABEL_COPY_MANAGEMENT: 'Copy Management',
    CONTEXT_MENU_LABEL_DATABASE_MAPPING: 'Database Mapping',
    CONTEXT_MENU_LABEL_IMPORT: 'Import',
    CONTEXT_MENU_LABEL_IMPORT_HISTORY: 'Import History',
    CONTEXT_MENU_LABEL_ROLE_SETUP: 'Role Setup',
    CONTEXT_MENU_LABEL_USER_SETUP: 'User Setup',
    CONTEXT_MENU_LABEL_SYSTEM_CONFIGURATION: 'System Configuration',
    CONTEXT_MENU_LABEL_DASHBOARD: 'Dashboard',
    CONTEXT_MENU_LABEL_SECURITY_POLICIES: 'Security Policies',
    CONTEXT_MENU_LABEL_MACHINE_LEARNING: 'Machine Learning',
    CONTEXT_MENU_LABEL_NLQ_CONFIG: 'NLQ',
    CONTEXT_MENU_LABEL_EMAIL: 'Email',
    CONTEXT_MENU_LABEL_REPORT: 'Report',
    CONTEXT_MENU_LABEL_REPORT_DESIGN: 'Report Design',
    CONTEXT_MENU_LABEL_SCHEDULING: 'Scheduling',
    CONTEXT_MENU_LABEL_CACHE: 'Cache',
    CONTEXT_MENU_LABEL_GOOGLE_MAP: 'Google Map',
    CONTEXT_MENU_LABEL_EXPORTING: 'Exporting',

    // TOP MENU
    TOP_MENU_REPORTS: 'Reports',
    TOP_MENU_DASHBOARDS: 'Dashboards',
    TOP_MENU_SETTINGS: 'Settings',
    TOP_MENU_EXPLORE: 'Explore',
    TOP_MENU_REPORT_LIST: 'Report List',
    TOP_MENU_NEW_REPORT: 'Classic Designer View',
    TOP_MENU_NEW_REPORT_RD2: 'Beta Designer View',
    TOP_MENU_DASHBOARD_LIST: 'Dashboard List',
    TOP_MENU_NEW_DASHBOARD: 'New Dashboard',

    //RECORD

    TOTAL: 'Total',
    RECORDS: 'Records',
    COLUMNS: 'Columns',
    RECORD: 'Record',
    COLUMN: 'Column',
    // MESSAGES
    COMMON_MESSAGES_ANOTHER_USER_MODIFIED:
      'Another user recently modified this data. Up-to-date data has been reloaded. You can now review and continue your work.',
    COMMON_MESSAGES_NOT_ALLOWED_ACTION: 'You are not allowed to do this action.',
    COMMON_MESSAGES_CONFIRM_CANCEL: 'Are you sure you want to cancel the changes?',
    COMMON_MESSAGES_CONFIRM_CHANGES_LOST: 'Are you sure? All your changes will be lost.',
    COMMON_MESSAGES_CONFIRM_SAVE: 'Are you sure you want to save all of the modifications?',
    COMMON_MESSAGES_DETAILS_WERE_SAVED: 'Details were saved.',
    COMMON_MESSAGES_FORMAT_DATE: "Please enter a valid value in 'MM/dd/yyyy hh:mm' format.",
    COMMON_MESSAGES_FORMAT_TIME: 'Please enter valid Numeric characters.',
    COMMON_MESSAGES_FORMAT_NUMBER: 'Please enter a value in Numeric format.',
    COMMON_MESSAGES_INVALID_KEY_JOIN: 'This foreign data object is invalid when the key join is dropped here.',
    COMMON_MESSAGES_INVALID_RELATIONSHIP: 'This foreign data object becomes invalid when the relationship is moved.',
    COMMON_MESSAGES_NO_CHANGES_FOUND: 'No changes found.',
    COMMON_MESSAGES_OUTDATED_REPORT: 'This report contains outdated information. Please save it again to update.',
    COMMON_MESSAGES_NO_RECORD_FOUND: 'No record found.',
    COMMON_MESSAGES_NUMBER_SMALLER: '{0} must be a number smaller than or equal to {1}.',
    COMMON_MESSAGES_REQUIRED: '{0} is required.',
    COMMON_MESSAGES_MUST_BE_FUNCTION: 'If functions are used, each selection must be a function.',
    COMMON_MESSAGES_NO_RESULT: 'No result',
    COMMON_MESSAGES_EMAIL_CONFIGURATION:
      'The Email Settings for your system/tenant have not been configured. Please contact your System Administrator for assistance',
    COMMON_MESSAGES_ERROR: 'Error',
    COMMON_MESSAGES_UNKNOWN_ERROR: 'Unknown Error',
    COMMON_MESSAGES_NOPERMISSION_VIEWREPORT: 'You do not have permission to view this report.',
    COMMON_MESSAGES_NOPERMISSION_CREATEREPORT: 'Your account has no permission to create Reports. Please contact your System Administrator for assistance.',
    COMMON_MESSAGES_NOPERMISSION_GENERAL: "Your account has no permission to perform this action. Please contact your System Administrator for assistance.",
    COMMON_MESSAGES_NOPERMISSION_CREATEDASHBOARD: 'Your account has no permission to create DashBoard. Please contact your System Administrator for assistance.',
    COMMON_MESSAGES_GENERAL_ERROR: 'Errors have occurred, please correct them before continuing.',
    COMMON_MESSAGES_GENERIC_ERROR:
      'The application has encountered an unknown error. Please contact System Administrator for further information and help.',
    COMMON_MESSAGES_EXPIRED_LICENSE:
      'There is a problem with the license. Please contact System Administrator for assistance.',
    COMMON_MESSAGES_INVALID_TIMEZONE: 'Invalid timezone value',
    COMMON_MESSAGES_NO_PERMISSION: "You don't have permission to perform this action",
    // COMMON_CONSTRAINT
    COMMON_REQUIRE_CONSTRAINT: ' is required.',
    COMMON_CONSTRAINT_REQUIRED: 'Required',

    // COMMON_LABEL
    COMMON_LABEL_ACCESS: 'Access',
    COMMON_LABEL_ACCESS_RIGHT: 'Access Rights',
    COMMON_LABEL_ACTION: 'Action',
    COMMON_LABEL_ACTIONS: 'Actions',
    COMMON_LABEL_ACTIVATE: 'Activate',
    COMMON_LABEL_ALIGN_CENTER: 'Center',
    COMMON_LABEL_ALIGN_JUSTIFY: 'Justify',
    COMMON_LABEL_ALIGN_LEFT: 'Align Left',
    COMMON_LABEL_ALIGN_RIGHT: 'Align Right',
    COMMON_LABEL_ALL: 'All',
    COMMON_LABEL_ATTACHMENT: 'Attachment',
    COMMON_LABEL_ATTACHMENT_TYPE: 'Attachment Type',
    COMMON_LABEL_BROWSE: 'Browse',
    COMMON_LABEL_IMPORT: 'Import',
    COMMON_LABEL_CANCEL: 'Cancel',
    COMMON_LABEL_NEXT: 'Next',
    COMMON_LABEL_PREVIOUS: 'Previous',
    COMMON_LABEL_CATEGORY: 'Category',
    COMMON_LABEL_SAVEINTO: 'Save into',
    COMMON_LABEL_SAVE_CHANGES: 'Save Changes',
    COMMON_LABEL_ADD_REPORT_TITLE: 'Add report title',
    COMMON_LABEL_SAVE_REPORT_ADV_OPTIONS: 'Advanced options',
    COMMON_LABEL_CONFIGURATION: 'Configuration',
    COMMON_LABEL_CONNECT: 'Connect',
    COMMON_LABEL_SENDEMAIL: 'Send Email',
    COMMON_LABEL_DOWNLOADFILE: 'Download File',
    COMMON_LABEL_COPY: 'Copy',
    COMMON_LABEL_CONFIGURE_CALCULATED_FIELDS: 'Configure Calculated Fields',
    COMMON_LABEL_CREATE: 'Create',
    COMMON_LABEL_CREATED: 'Created',
    COMMON_LABEL_DASHBOARD: 'Dashboard',
    COMMON_LABEL_DATA_SETUP: 'Data Setup',
    COMMON_LABEL_DATA_MODEL: 'Data Model',
    COMMON_LABEL_CUSTOM_VIEW: 'Custom View',
    COMMON_LABEL_DAYS: 'day(s)',
    COMMON_LABEL_DEACTIVATE: 'Deactivate',
    COMMON_LABEL_DELETE: 'Delete',
    COMMON_LABEL_DELIVERY_METHOD: 'Delivery Method',
    COMMON_LABEL_DESCRIPTION: 'Description',
    COMMON_LABEL_DETAILS: 'Details',
    COMMON_LABEL_EDIT: 'Edit',
    COMMON_LABEL_EMAIL: 'Email',
    COMMON_LABEL_EMAILING: 'Emailing',
    COMMON_LABEL_EMBEDDED_HTML: 'Embedded HTML',
    COMMON_LABEL_EXPORT: 'Export',
    COMMON_LABEL_PRINTING: 'Printing',
    COMMON_LABEL_EXPORTING: 'Exporting',
    COMMON_TOOLTIP_EXPORTING: 'Preview your report and make changes to the report layout for exporting',
    COMMON_LABEL_EXPORTING_ERROR: 'Error export',
    COMMON_LABEL_PRINTING_ERROR: 'Error print',
    COMMON_LABEL_FROM: 'From',
    COMMON_LABEL_HOURS: 'hour(s)',
    COMMON_LABEL_JOIN_TYPE: 'Join Type',
    COMMON_LABEL_LINK: 'Link',
    COMMON_LABEL_LOGIN: 'Login',
    COMMON_LABEL_METRIC: 'Metric',
    COMMON_LABEL_MINS: 'min(s)',
    COMMON_LABEL_SECS: 'sec(s)',
    COMMON_LABEL_MOVE: 'Move',
    COMMON_LABEL_NAME: 'Name',
    COMMON_LABEL_OBJECT: 'Object',
    COMMON_LABEL_OK: 'OK',
    COMMON_LABEL_OR: 'Or',
    COMMON_LABEL_OPTIONS: 'Options',
    COMMON_LABEL_OWNER: 'Owner',
    COMMON_LABEL_PASSWORD: 'Password',
    COMMON_LABEL_PERMISSIONS: 'Permissions',
    COMMON_LABEL_DESIGN: 'Design',
    COMMON_LABEL_PREVIEW: 'Preview',
    COMMON_LABEL_REPORT_VIEWER: 'Report Viewer',
    COMMON_LABEL_PRINT: 'Print',
    COMMON_LABEL_REPORT_PART: 'Report Part',
    COMMON_LABEL_REPORTS: 'Reports',
    COMMON_LABEL_ROLE: 'Role',
    COMMON_LABEL_ROLE_SETUP: 'Role Setup',
    COMMON_LABEL_SAVE: 'Save',
    COMMON_LABEL_SAVE_AS: 'Save As',
    COMMON_LABEL_SAVE_CONFIRMATION: 'Confirmation',
    COMMON_LABEL_SAVE_REPORT_BEFORE_DASHBOARD_CONFIRMATION: 'Please save the Report before adding it to a Dashboard',
    COMMON_LABEL_SAVE_REPORT_BEFORE_EXPORT_CONFIRMATION: 'Please save the report before exporting',
    COMMON_LABEL_SAVE_INTO: 'Save Into',
    COMMON_LABEL_SCHEDULE: 'Schedule',
    COMMON_LABEL_SCHEDULING: 'Scheduling',
    COMMON_LABEL_SEARCH: 'Search',
    COMMON_LABEL_SEND: 'Send',
    COMMON_LABEL_SHARE_WITH: 'Share With',
    COMMON_LABEL_SORT_BY: 'Sort by',
    COMMON_LABEL_SUBCATEGORY: 'Subcategory',
    COMMON_LABEL_SUBSCRIBE: 'Subscribe',
    COMMON_LABEL_SYSTEM_CONFIGURATION: 'System Configuration',
    COMMON_LABEL_TENANT_SETUP: 'Tenant Setup',
    COMMON_LABEL_SYSTEM_WIDE: 'System-wide',
    COMMON_LABEL_TENANT: 'Tenant',
    COMMON_LABEL_TENANT_GROUP: 'Tenant Group',
    COMMON_LABEL_TEST: 'Test',
    COMMON_LABEL_TEXT: 'Text',
    COMMON_LABEL_TITLE: 'Title',
    COMMON_LABEL_TO: 'To',
    COMMON_LABEL_TYPE: 'Type',
    COMMON_LABEL_STATIC: 'Static',
    COMMON_LABEL_DYNAMIC: 'Dynamic',
    COMMON_LABEL_DYNAMIC_SUBTOTAL: 'Dynamic Global',
    COMMON_LABEL_UNCATEGORIZED: 'Uncategorized',
    COMMON_LABEL_USER_SETUP: 'User Setup',
    COMMON_LABEL_VALIDATE: 'Validate',
    COMMON_LABEL_UPGRADE: 'Upgrade',
    COMMON_LABEL_VALUE: 'Value',
    COMMON_LABEL_HIGH: 'High',
    COMMON_LABEL_LOW: 'Low',
    COMMON_LABEL_DATA_CONNECTORS: 'Data Connectors',
    COMMON_LABEL_DASHBOARDS: 'Dashboards',
    COMMON_LABEL_DATABASE_NAME: 'Database Name',
    COMMON_LABEL_DATA_OBJECT: 'Data Object',
    COMMON_LABEL_FIELD: 'Field',
    COMMON_LABEL_FOREIGN_DATA_OBJECT: 'Foreign Data Object',
    COMMON_LABEL_JOIN_FIELD: 'Join Field',
    COMMON_LABEL_POSITION: 'PositionID',
    COMMON_LABEL_SYSTEM: 'System',
    COMMON_LABEL_TEMPLATE: 'Template',
    COMMON_LABEL_TEMPLATES: 'Templates',
    COMMON_LABEL_TENANT_NAME: 'Tenant Name',
    COMMON_LABEL_OTHERS: 'Others',
    COMMON_LABEL_INSTANCE_NAME: 'Instance Name',
    COMMON_LABEL_DELIVERY_TYPE: 'Delivery Type',
    COMMON_LABEL_FILTER_VALUE_SELECTION: 'Filter Value Selection',
    COMMON_LABEL_STRIKETHROUGH: 'Strikethrough',
    COMMON_LABEL_MIDDLE: 'Middle',
    COMMON_LABEL_TOP: 'Top',
    COMMON_LABEL_BOTTOM: 'Bottom',
    COMMON_LABEL_BULLET_LIST: 'Bullet List',
    COMMON_LABEL_NUMBERED_LIST: 'Numbered List',
    COMMON_LABEL_SAVE_REPORT_TYPE_LABEL: 'Choose how you want to save your data',
    COMMON_LABEL_REPORT: 'Report',
    COMMON_LABEL_DRAFT: 'Draft',
    COMMON_LABEL_CHART: 'Chart',
    COMMON_LABEL_FORM: 'Form',
    COMMON_LABEL_GAUGE: 'Gauge',
    COMMON_LABEL_GRID: 'Grid',
    COMMON_LABEL_MAP: 'Map',
    COMMON_LABEL_MAP_IZENDA: 'High Maps',
    COMMON_LABEL_MAP_GOOGLE: 'Google Maps',
    COMMON_LABEL_KPI: 'KPI',
    COMMON_LABEL_STATUS: 'Status',
    COMMON_LABEL_ACTIVE: 'Active',
    COMMON_LABEL_ARCHIVED: 'Archived',
    COMMON_LABEL_FIELD_NAME: 'Field Name',
    COMMON_LABEL_DATA_TYPE: 'Data Type',
    COMMON_LABEL_VISIBLE: 'Visible',
    COMMON_LABEL_CUSTOM_URL: 'Custom URL',
    COMMON_LABEL_EMBEDDED_JAVASCRIPT: 'Embedded Javascript',
    COMMON_LABEL_ADD_CALCULATED_FIELD: 'Add Calculated Field',
    COMMON_LABEL_FILTER_PROPERTIES: 'Filter Properties',
    COMMON_LABEL_FIELD_PROPERTIES: 'Field Properties',
    COMMON_LABEL_MENU_CLEAR_FORMAT: 'Clear Formats',
    COMMON_LABEL_MENU_REMOVE_FUNCTION: 'Remove Function',
    COMMON_LABEL_COLOR: 'Color',
    COMMON_LABEL_ADD_SETTING: 'Add Setting',
    COMMON_LABEL_SUNDAY: 'Sunday',
    COMMON_LABEL_MONDAY: 'Monday',
    COMMON_LABEL_TUESDAY: 'Tuesday',
    COMMON_LABEL_WEDNESDAY: 'Wednesday',
    COMMON_LABEL_THURSDAY: 'Thursday',
    COMMON_LABEL_FRIDAY: 'Friday',
    COMMON_LABEL_SATURDAY: 'Saturday',
    COMMON_LABEL_CHART_TYPE: 'Chart Type',
    COMMON_LABEL_DATA_SOURCE: 'Data Source',
    COMMON_TOOLTIP_DATA_SOURCE:
      'Select the data sources containing the fields you would like to use to design your report',
    COMMON_LABEL_APPLY: 'Apply',
    COMMON_LABEL_ADD: 'Add',
    COMMON_LABEL_INSERT: 'Insert',
    COMMON_LABEL_REMOVE: 'Remove',
    COMMON_LABEL_DATE_TIME: 'Date Time',
    COMMON_LABEL_SUBTOTAL: 'Subtotal',
    COMMON_LABEL_GRAND_TOTAL: 'Grand Total',
    COMMON_LABEL_POSOTION_GRAND_TOTAL: 'Grand Total Label Position',
    COMMON_LABEL_BORDER: 'Border',
    COMMON_LABEL_GENERAL_INFO: 'General Info',
    COMMON_LABEL_GROUPING: 'Grouping',
    COMMON_LABEL_USE_SEPARATOR: 'Use Separator',
    COMMON_LABEL_INVERTED: 'Inverted',
    COMMON_LABEL_DATA_REFRESH_INTERVAL_SETTING: 'Data Refresh',
    COMMON_LABEL_CONDITIONAL_FORMATTING_SETTING: 'Conditional Formatting',
    COMMON_LABEL_USE_PAGINATION: 'Use Pagination',
    COMMON_LABEL_ITEM_PER_ROW: 'Item(s) Per Row',
    COMMON_LABEL_EMBEDDED_REPORT_SETTINGS: 'Embedded Report Settings',
    COMMON_LABEL_FORMAT: 'Format',
    COMMON_LABEL_HEADING: 'Heading',
    COMMON_LABEL_COLUMN: 'Column',
    COMMON_LABEL_REPORT_NAME: 'Report Name',
    COMMON_LABEL_REPORT_DESCRIPTION: 'Report Description',
    COMMON_LABEL_TEMPLATE_NAME: 'Template Name',
    COMMON_LABEL_TEMPLATE_DESCRIPTION: 'Template Description',
    COMMON_LABEL_EXPRESSION: 'Expression',
    COMMON_LABEL_MODEL: 'Model',
    COMMON_LABEL_PREVIEW_RESULT: 'Preview Result',
    COMMON_LABEL_CLOSE: 'Close',
    COMMON_LABEL_HIDE: 'Hide',
    COMMON_LABEL_SHOW: 'Show',
    COMMON_LABEL_OPEN: 'Open',
    COMMON_LABEL_EXPAND: 'Expand',
    COMMON_LABEL_COLLAPSE: 'Collapse',
    COMMON_LABEL_EVERY_HOUR: 'Every Hour',
    COMMON_LABEL_EVERY_DATE: 'Every Day',
    COMMON_LABEL_EVERY_WEEKDAY: 'Every Weekday',
    COMMON_LABEL_EVERY_WEEK: 'Every Week',
    COMMON_LABEL_EVERY_TWO_WEEK: 'Every Two Weeks',
    COMMON_LABEL_EVERY_MONTH: 'Every Month',
    COMMON_LABEL_EVERY_QUARTER: 'Every Quarter',
    COMMON_LABEL_REMOVE: 'Remove',
    COMMON_LABEL_RESET: 'Reset',
    COMMON_LABEL_PRINTINGS: 'Printing',
    COMMON_LABEL_ICON: 'Icon',
    COMMON_LABEL_STYLE: 'Style',
    COMMON_LABEL_TABLE_NAME: 'Table Name',
    COMMON_LABEL_LANGUAGE: 'Language',
    COMMON_LABEL_DATE_FORMAT: 'Date Format',
    COMMON_LABEL_SECURITY_QUESTIONS: 'Security Questions',
    COMMON_LABEL_SECURITY_QUESTION: 'Security Question',
    COMMON_LABEL_CHANGE_SECURITY_QUESTION: 'Change Security Questions',
    COMMON_LABEL_CHANGE_PASSWORD: 'Change Password',
    COMMON_LABEL_CURRENT_PASSWORD: 'Current Password',
    COMMON_LABEL_YOUR_ANSWER: 'Your answer',
    COMMON_LABEL_YOUR_ANSWER_IS_REQUIRED: 'Your answer is required',
    COMMON_LABEL_UNDEFINED_VALUE: 'UNDEFINED VALUE',
    COMMON_LABEL_COPY_SETTINGS: 'Copy Settings',
    COMMON_LABEL_HELP_SYSTEM: 'Help System',
    COMMON_LABEL_BACK: 'Back',
    COMMON_LABEL_GLOBAL_REPORT: 'Global Report',
    COMMON_LABEL_GLOBAL_DASHBOARD: 'Global Dashboard',
    COMMON_LABEL_SHOW_REPORT_HEADER_FOOTER: 'Show Header & Footer',
    COMMON_LABEL_HIDE_REPORT_HEADER_FOOTER: 'Hide Header & Footer',
    COMMON_LABEL_COLOR_THEME: 'Color Theme',
    COMMON_LABEL_SHOW_SELECTED_ITEMS_ONLY: 'Show selected items only',
    COMMON_LABEL_CONTROL_DISABLE_INFO: 'This is disabled because of the system admin settings.',
    COMMON_LABEL_TENANT_FIELD: 'Tenant Field',
    COMMON_LABEL_YES: 'Yes',
    COMMON_LABEL_NO: 'No',
    COMMON_LABEL_OFF: 'OFF',
    COMMON_LABEL_ON: 'ON',
    COMMON_LABEL_DASHBOARD_NAME: 'Add Report Part to Dashboard',
    COMMON_LABEL_VIEW_MORE: 'View more',
    COMMON_LABEL_SHOW_LESS: 'Show less',

    // COMMON_SELECT
    COMMON_SELECT_LABEL_ALL: 'All',
    COMMON_SELECT_VALUE_ALL: 'all',

    // COMMON_DATA_TYPE
    COMMON_DATA_TYPE_IMAGE: 'Image',
    COMMON_DATA_TYPE_TEXT: 'Text',
    COMMON_DATA_TYPE_JSON: 'JSON',
    COMMON_DATA_TYPE_XML: 'XML',

    // COMMON TOOLTIP
    COMMON_TOOLTIP_CANCEL_CHANGE: 'Cancel change',
    COMMON_TOOLTIP_RENAME: 'Rename',
    COMMON_TOOLTIP_UPDATE_CHANGE: 'Update change',

    // COMMON PLACE HOLDER
    COMMON_PLACEHOLDER_SEARCH: 'Search...',

    // COMMON CRITERIA
    COMMON_CRITERIA_AVERAGE_RENDERING_TIME: 'Average Rendering Time',
    COMMON_CRITERIA_CREATED_BY: 'Created By',
    COMMON_CRITERIA_CREATED_DATE: 'Created Date',
    COMMON_CRITERIA_EDITED_BY: 'Last Edited By',
    COMMON_CRITERIA_EDITED_DATE: 'Last Edited Date',
    COMMON_CRITERIA_LAST_EDITED: 'Last Edited',
    COMMON_CRITERIA_LAST_VIEWED: 'Last Viewed',
    COMMON_CRITERIA_NUMBER_OF_VIEWS: 'Number of Views',
    COMMON_CRITERIA_VERSION: 'Version',
    COMMON_CRITERIA_DASHBOARD_OWNER: 'Dashboard Owner',

    //CATEGORY TOOLTIP
    CATEGORY_TOOLTIP_DELETE: 'Delete',
    CATEGORY_TOOLTIP_ADD: 'Add new category',
    SUBCATEGORY_TOOLTIP_ADD: 'Add new sub category',

    // PAGINATOR
    PAGINATOR_ITEMS_PER_PAGE: '{0} to {1} of {2} | Items per page ',
    PAGINATOR_WITHOUT_ITEMS_PER_PAGE: '{0} to {1} of {2} ',

    // IZENDA SELECT
    IZENDA_SELECT_ADD_LABEL_TEXT: 'Add "{label}"?',
    IZENDA_SELECT_CLEAR_ALL_TEXT: 'Clear all',
    IZENDA_SELECT_CLEAR_VALUE_TEXT: 'Clear value',
    IZENDA_SELECT_NO_RESULT_TEXT: 'No results found',
    IZENDA_SELECT_PLACE_HOLDER: 'Select...',

    // SEARCH RESULT
    SEARCH_RESULT_LABEL_SEARCH_RESULT: 'Search Result',
    SEARCH_RESULT_LABEL_SEARCH_CRITERIA: 'Search Criteria',

    // TINY MCE
    TINY_MCE_SPELL_CHECKER: 'Spell Checker',

    // BORDER SETTINGS
    BORDER_SETTING_LABEL_NONE: 'None',
    BORDER_SETTING_LABEL_OUTLINE: 'Outline',
    BORDER_SETTING_LABEL_INSIDE: 'Inside',
    BORDER_SETTING_LABEL_DASH_STYLE: 'Dash Style',
    BORDER_SETTING_LABEL_THICKNESS: 'Thickness',
    BORDER_SETTING_TOOLTIP_APPLY_BORDER: 'Use buttons to apply borders',
    BORDER_SETTING_LABEL_SETIING: 'Setting',

    // BUTTON HIGHLIGHT
    BUTTON_HIGHLIGHT_WRAP_TEXT: 'Wrap text',

    // COLOR SETTING
    COLOR_SETTING_TOOLTIP: 'Color Settings',
    COLOR_SETTING_POINT_OPTIONS: 'Point Options',

    // COLOR STYLING
    COLOR_STYLING_TEXT_TOOLTIP: 'Font Color',
    COLOR_STYLING_BACKGROUND_TOOLTIP: 'Background Color',

    // FONT STYLE
    FONT_STYLE_BOLD_TOOLTIP: 'Bold',
    FONT_STYLE_ITALIC_TOOLTIP: 'Italic',
    FONT_STYLE_UNDERLINE_TOOLTIP: 'Underline',
    FONT_STYLE_ARIA_LABEL: 'Font style',

    // NO DATA
    NO_DATA_TO_SHOW: 'No data to show',
    NO_RECORD_FOUND: 'No record found',
    NO_PERMISSION_TEXT:
      'Your account has no permission to access to this page. Please contact your System Administrator for assistance.',
    NOT_FOUND_PAGE: 'Oops! This page is not found.',
    NO_SEARCH_RESULT: 'Incorrect search query. Please try again and select from the suggested queries.',

    // ORIENTATION SETTING
    ORIENTATION_SETTING_NORMAL: 'Normal',
    ORIENTATION_SETTING_ANGLE_COUNTER: 'Angle Counterclockwise',
    ORIENTATION_SETTING_ANGLE_CLOCKWISE: 'Angle Clockwise',
    ORIENTATION_SETTING_ROTATE_TEXT_UP: 'Rotate Text Up',
    ORIENTATION_SETTING_ROTATE_TEXT_DOWN: 'Rotate Text Down',

    // POPUP INPUT
    POPUP_INPUT_DEFAULT_TITLE: 'Default title',

    // SETTING BY RANGE
    SETTING_BY_RANGE_ADD_SETTING: 'Add Setting',

    // TEXT CELL COLOR SETTING
    TEXT_CELL_COLOR_TOOLTIP_TEXT_COLOR: 'Text Color Settings',
    TEXT_CELL_COLOR_TOOLTIP_CELL_COLOR: 'Cell Color Settings',

    // USER MENU
    USER_MENU_MY_PROFILE: 'My Profile',
    USER_MENU_EXPORT_MANAGER: 'Export Manager',
    USER_MENU_SIGN_OUT: 'Sign Out',

    // QUERY RESULT
    QUERY_RESULT_ADD_COLUMNS: 'Add Columns',
    QUERY_RESULT_APPLY: 'Apply',

    // PERFORMANCE
    PERFORMANCE_LABEL_QUERY_TIMEOUT: 'Query Timeout',
    PERFORMANCE_LABEL_USE_NO_LOCK: 'Use No Lock',
    PERFORMANCE_LABEL_DATA_SOURCE_LIMIT: 'Data Source Limit',
    PERFORMANCE_TIMEOUT_TOOLTIP:
      'Sets the wait time in seconds for dropdown menus that use results loaded from database queries. If the wait time has elapsed and the query has not returned, the command ends.',
    PERFORMANCE_NOLOCK_TOOLTIP: 'Sets the value indicating whether the NOLOCK statement will be used in SQL queries.',
    PERFORMANCE_DATASOURCE_TOOLTIP: 'Sets the maximum number of data sources allowed in a single report.',
    PERFORMANCE_RESET_TO_DEFAULT: 'Back to default value.',
    PERFORMANCE_QUERY_TIMEOUT_REQUIRED: 'Query Timeout is required.',
    PERFORMANCE_QUERY_TIMEOUT_NUMBERICALITY: 'Query Timeout should be a whole number.',
    PERFORMANCE_QUERY_TIMEOUT_GREATER_THAN_0: 'Query Timeout must be a number greater than or equal to 0.',
    PERFORMANCE_QUERY_TIMEOUT_LESS_THAN_MAX_INT: 'Query Timeout must be a number smaller than or equal to 2147483648.',
    PERFORMANCE_DS_LIMIT_REQUIRED: 'Data Source Limit is required.',
    PERFORMANCE_DS_LIMIT_NUMBERICALITY: 'Data Source Limit should be a whole number.',
    PERFORMANCE_DS_LIMIT_GREATER_THAN_0: 'Data Source Limit must be a number greater than or equal to 0.',
    PERFORMANCE_DS_LIMIT_LESS_THAN_MAX_INT: 'Data Source Limit must be a number smaller than or equal to 2147483648.',
    PERFORMANCE_FIELD_LIMIT_REQUIRED: 'Field Limit is required.',
    PERFORMANCE_FIELD_LIMIT_NUMBERICALITY: 'Field Limit should be a whole number.',
    PERFORMANCE_FIELD_LIMIT_GREATER_THAN_0: 'Field Limit must be a number greater than or equal to 0.',
    PERFORMANCE_FIELD_LIMIT_LESS_THAN_MAX_INT: 'Field Limit must be a number smaller than or equal to 2147483648.',
    PERFORMANCE_QUERY_LIMIT_REQUIRED: 'Query Limit is required.',
    PERFORMANCE_QUERY_LIMIT_NUMBERICALITY: 'Query Limit should be a whole number.',
    PERFORMANCE_QUERY_LIMIT_GREATER_THAN_0: 'Query Limit must be a number greater than or equal to 0.',
    PERFORMANCE_QUERY_LIMIT_LESS_THAN_MAX_INT: 'Query Limit must be a number smaller than or equal to 2147483647.',
    PERFORMANCE_PIVOT_COLUMN_LIMIT_REQUIRED: 'Pivot Column Limit is required.',
    PERFORMANCE_PIVOT_COLUMN_LIMIT_NUMBERICALITY: 'Pivot Column Limit should be a whole number.',
    PERFORMANCE_PIVOT_COLUMN_LIMIT_GREATER_THAN_0: 'Pivot Column Limit must be a number greater than or equal to 0.',
    PERFORMANCE_PIVOT_COLUMN_LIMIT_LESS_THAN_MAX_INT:
      'Pivot Column Limit must be a number smaller than or equal to 2147483648.',
    PERFORMANCE_FILTER_LIMIT_REQUIRED: 'Filter Limit is required.',
    PERFORMANCE_FILTER_LIMIT_NUMBERICALITY: 'Filter Limit should be a whole number.',
    PERFORMANCE_FILTER_LIMIT_GREATER_THAN_0: 'Filter Limit must be a number greater than or equal to 0.',
    PERFORMANCE_FILTER_LIMIT_LESS_THAN_MAX_INT: 'Filter Limit must be a number smaller than or equal to 2147483648.',
    PERFORMANCE_FIELD_LIMIT: 'Field Limit',
    PERFORMANCE_FIELD_LIMIT_TOOLTIP: 'Sets the maximum number of fields allowed for use in a report part.',
    PERFORMANCE_QUERY_LIMIT: 'Query Limit',
    PERFORMANCE_PIVOT_COLUMN_LIMIT: 'Pivot Column Limit',
    PERFORMANCE_QUERY_LIMIT_TOOLTIP:
      'Sets the maximum number of values returned from the query in the designer/viewer/dashboards/exports.',
    PERFORMANCE_PIVOT_COLUMN_LIMIT_TOOLTIP: 'Sets the maximum number of pivot columns allowed in a report part.',
    PERFORMANCE_FILTER_LIMIT: 'Filter Limit',
    PERFORMANCE_FILTER_LIMIT_TOOLTIP: 'Sets the maximum number of items displayed in the Filter Value dropdown.',

    // CATEGORY
    CATEGORY_MESSAGE_CONFIRM_DELETE:
      'Are you sure you want to delete this category? Any data sources under this category will become uncategorized.',
    CATEGORY_LABEL_NAME: 'Category Name',
    CATEGORY_LABEL_NAME_TOOLTIP: 'Sets a list of datasource categories.',
    CATEGORY_LABEL_ADD_NEW: 'Add New',
    CATEGORY_ERROR_MESSAGE_TEMPLATE: '^A/An Category ${value} already exists.',
    CATEGORY_REQUIRED_NAME: '^Category Name is required.',
    CATEGORY_REQUIRED_SUBCATEGORY: 'Subcategory Name is required.',
    CATEGORY_MESSAGES_CONFIRM_DELETE_CATEGORY:
      'Are you sure you want to delete {0} category? All subcategories in this category will also be removed.',
    CATEGORY_MESSAGES_CONFIRM_DELETE_SUBCATEGORY: 'Are you sure you want to delete {0} subcategory?',

    SELECT_TENANT_POPUP_HEADER: 'Select Tenant',
    SELECT_TENANT: 'Select Tenant',

    // SECURITY
    SECURITY_LABEL_SHOW_TENANT_FIELD: 'Show Tenant Field',
    SECURITY_LABEL_TENANT_FIELD: 'Tenant Field',
    SECURITY_LABEL_ADDITIVE_FIELDS_AUTO_VISIBLE: 'Set Additive Field Auto Visible',
    SECURITY_LABEL_ADDITIVE_FIELDS_AUTO_FILTERABLE: 'Set Additive Field Auto Filterable',
    SECURITY_RENDER_HTML_EXPORT: 'Render HTML in Printing/Exporting',
    SECURITY_LABEL_RENDER_HTML_IN_REPORT_VIEWER: 'Render HTML in Report Viewer',
    SECURITY_TENANT_TOOLTIP:
      "The name of the database fields that store Tenant information for users. The user's TenantIDs are used as the values that will be matched within the field's data.",
    SECURITY_SHOW_TENANT_TOOLTIP:
      'When false, this hides the field identified in the Tenant Field property from being selected or viewed by users. Any filters based on the Tenant Field will still affect the results.',
    SECURITY_VISIBLE_FIELD_TOOLTIP:
      'If this is checked additive fields will automatically be set to visible when the physical data model changes.',
    SECURITY_FILTERABLE_FIELD_TOOLTIP:
      'If this is checked then additive fields will automatically be set to Filterable when the physical data model changes.',
    SECURITY_TENANT_FIELD_NO_RESULT_TEXT: 'Enter to add tenant field',
    SECURITY_RESET_TENANT_FIELD_TOOLTIP: 'Back to default value.',
    SECURITY_LABEL_SYSTEM_TENANT_FIELD: 'System Tenant Field: ',
    SECURITY_RENDER_HTML_IN_REPORT_VIEWER_TOOLTIP:
      'If this is checked then the HTML content from the fields will be rendered in the report viewer',

    // OTHER_SETTINGS
    OTHER_SETTINGS_TOOLTIP_RESET_TO_DEFAULT: 'Back to default value.',
    OTHER_SETTINGS_LABEL_SORT_COLUMN_NAME: 'Sort Column Name',
    OTHER_SETTINGS_TOOLTIP_SORT_COLUMN_NAME:
      'If true then sort by position in the database. If false then sort in alphabetical order.',
    OTHER_SETTINGS_LABEL_TRIM_TIME_IN_JOINS: 'Trim Time In Joins',
    OTHER_SETTINGS_TOOLTIP_TRIM_TIME_IN_JOINS:
      'Sets whether joins using DateTime fields will use the time portion of the field.',
    OTHER_SETTINGS_LABEL_TIMEZONE_FOR_DATA_OFFSET: 'Timezone for Data Offset',
    OTHER_SETTINGS_TOOLTIP_TIMEZONE_FOR_DATA_OFFSET:
      'Sets the value indicating the time zone offset for database data in report designer/viewer/dashboard in hours.',
    OTHER_SETTINGS_LABEL_TIMEZONE_FOR_TIMESTAMP_OFFSET: 'Timezone for Timestamp Offset',
    OTHER_SETTINGS_TOOLTIP_TIMEZONE_FOR_TIMESTAMP_OFFSET:
      'Sets the value indicating the time zone offset for timestamps used in the system in hours.',
    OTHER_SETTINGS_LABEL_CONVERT_NULL_TO_EMPTY_STRING: 'Convert Null to Empty String',
    OTHER_SETTINGS_TOOLTIP_CONVERT_NULL_TO_EMPTY_STRING:
      'If this flag is turned on, system will show blank for any field containing NULL and blank for any field containing blank.',
    OTHER_SETTINGS_LABEL_ENCODE_VARIABLES_IN_CUSTOM_URL: 'Encode variables in Custom URL',
    OTHER_SETTINGS_TOOLTIP_ENCODE_VARIABLES_IN_CUSTOM_URL:
      'If this flag is turned on, system will encode variables in Custom URL.',
    OTHER_SETTINGS_LABEL_SHOW_SCHEMA_NAME: 'Show Schema Name',
    OTHER_SETTINGS_TOOLTIP_SHOW_SCHEMA_NAME: 'Set if schema name is shown together with data source name.',
    OTHER_SETTINGS_LABEL_SHOW_INTRODUCTION_NAME: 'Show Introduction Text',
    OTHER_SETTINGS_TOOLTIP_SHOW_INTRODUCTION_NAME: 'Set if introduction text is shown in the report designer datasource tab.',
    OTHER_SETTINGS_LABEL_INTRODUCTION_TEXT: 'Introduction Text',
    OTHER_SETTINGS_TOOLTIP_INTRODUCTION_TEXT: 'Set the help text to guide the end users for creating reports.',
    OTHER_SETTINGS_MESSAGE_INTRODUCTION_TEXT_REQUIRED: 'Introduction Text is required.',
    OTHER_SETTINGS_LABEL_SEND_TO_DISK_PATH: 'Send to Disk Path',
    OTHER_SETTINGS_TOOLTIP_SEND_TO_DISK_PATH:
      'Sets the path where files will be saved for any scheduled instances with a Send to Disk location specified.',
    OTHER_SETTINGS_LABEL_EXCEL_DATA_FILES_PATH: 'Excel Data Files Path',
    OTHER_SETTINGS_TOOLTIP_EXCEL_DATA_FILES_PATH: 'Sets the path where excel data source files will be uploaded.',
    OTHER_SETTINGS_LABEL_DETERMINE_COMMON_FILTER: 'Determine common filter for the same field based on',
    OTHER_SETTINGS_TOOLTIP_DETERMINE_COMMON_FILTER:
      'Configure how the system should consider whether different filters are to filter the “same” field or not so that they are eligible for considering as common filter in Dashboard.',
    OTHER_SETTINGS_LABEL_SAMEFIELD_SAMEDBSCHEMA: 'Same field of the same data object from the same DB schema',
    OTHER_SETTINGS_LABEL_SAMEFIELD_SAMEDBSCHEMA_OR_CONNECTIONSTRING:
      'Same field name regardless of DB schema or connection string',
    OTHER_SETTINGS_LABEL_SAMEALIAS: 'Same alias name regardless of DB schema or connection string',
    OTHER_SETTINGS_LABEL_DETERMINE_INHERIT_FILTER: 'Determine inheritable filter for the same field based on',
    OTHER_SETTINGS_TOOLTIP_DETERMINE_INHERIT_FILTER:
      'Configure how the system should consider whether different filters are to filter the “same” field or not so that their values are eligible for inheritance in subreport.',
    OTHER_SETTINGS_LABEL_IHS_FIELD_ID: 'Same field of the same data object from the same DB schema',
    OTHER_SETTINGS_LABEL_IHS_FIELD_NAME: 'Same field name regardless of DB schema or data object',
    OTHER_SETTING_LABEL_MULTIPLE_SORT_ON_GRID_HEADER: 'Allow Multiple Sorts on Grid Header',
    OTHER_SETTING_TOOLTIP_MULTIPLE_SORT_ON_GRID_HEADER:
      'If this flag is turned on, system allows multiple column sorting in Grid Header. If this flag is turned off, system allows single column sorting in Grid Header.',
    OTHER_SETTING_LABEL_SHOW_PREVIEW: 'Show Preview section in Configuration Mode',
    OTHER_SETTING_TOOLTIP_SHOW_PREVIEW:
      'Configure to show or hide the Preview section in the report part’s backside.',
    OTHER_SETTING_LABEL_HIDE_HEADER_FOOTER_IN_REPORT: 'Hide report header and footer by default',
    OTHER_SETTING_TOOLTIP_HIDE_HEADER_FOOTER_IN_REPORT:
      'Configure to hide or show the header and footer section in Report Viewer and Report Designer by default.',
    OTHER_SETTING_LABEL_REPEAT_TABLE_HEADER: 'Repeat Table Header in Forms (for PDF only)',
    OTHER_SETTING_TOOLTIP_REPEAT_TABLE_HEADER:
      'Configure to repeat table header in forms on each PDF page.',
    OTHER_SETTINGS_LABEL_MAXIMUM_SUBREPORT_LEVEL: 'Maximum embedded subreport nesting level for exporting ({0} - {1})',
    OTHER_SETTINGS_TOOLTIP_MAXIMUM_SUBREPORT_LEVEL:
      'Configure how the system should show embedded subreports for exporting. If the nesting level is higher than the specified one, then embedded subreports will be displayed as links. Note: Increasing the maximum nested subreport for export beyond "1" may severely impact performance of exporting.',
    OTHER_SETTINGS_MESSAGE_MAXIMUM_SUBREPORT_LEVEL_REQUIRED: 'Maximum embedded subreport nesting level is required.',
    OTHER_SETTINGS_MESSAGE_MAXIMUM_SUBREPORT_LEVEL_ONLYINTEGER:
      'Maximum embedded subreport nesting level should be integer.',
    OTHER_SETTINGS_MESSAGE_MAXIMUM_SUBREPORT_LEVEL_GREATER_THAN:
      'Maximum embedded subreport nesting level must be greater than or equal to {0}.',
    OTHER_SETTINGS_MESSAGE_MAXIMUM_SUBREPORT_LEVEL_LESS_THAN:
      'Maximum embedded subreport nesting level must be less than or equal to {0}.',
    OTHER_SETTINGS_CALENDAR_WEEK_START:
      'Calendar Week Start',
    OTHER_SETTINGS_TOOLTIP_CALENDAR_WEEK_START:
      'Configure to set start day of a week which will be referred to in the Time Period - Calendar Week filter when applied.',
    OTHER_SETTINGS_CALENDAR_CONFIGURE_PERIOD:
      'Configure Period',
    OTHER_SETTINGS_ALLOW_REPORTS_AND_DASHBOARDS_TO_INHERIT_CATEGORY_ACCESS_RIGHTS:
     'Allow Reports and Dashboards to inherit Category Access Rights',
    OTHER_SETTINGS_TOOLTIP_ALLOW_REPORTS_AND_DASHBOARDS_TO_INHERIT_CATEGORY_ACCESS_RIGHTS:
     'Configure to apply category access defaults for roles.',
    OTHER_SETTINGS_INHERIT_CATEGORY_ACCESS_RIGHTS_ENABLE_WARNING:
     "Are you sure you want to enable this setting? This setting will  <br/><br/> <ul> <li> Reset all Tenant & Role level access defaults which cannot be restored  </li>  <li>Disable Tenant level access defaults</li> <li>Category Access defaults will apply to roles</li> <li> Not impact previous reports & dashboards access rights </li> <li> 'Prevent Report/ Dashboard Sharing Based on Category Accessibility' setting will be enabled and cannot be changed </li>",
    OTHER_SETTINGS_INHERIT_CATEGORY_ACCESS_RIGHTS_DISABLE_WARNING:
     "Are you sure you want to disable this setting? This setting will  <br/><br/> <ul> <li>Reset all Role access defaults which cannot be restored</li>  <li>Enable Tenant level access defaults</li>",
    // EXPLORE
    EXPLORE_CTAS_DATA_SOURCE_DESCRIPTION: 'Expose new data to our Natural Language Query service to build more intricate reports.',
    EXPLORE_CTAS_DATA_SOURCE_LABEL: 'Add new data source',
    EXPLORE_CTAS_DASHBOARD_DESCRIPTION: 'Design a new dashboard to enhance your insights from multiple reports.',
    EXPLORE_CTAS_DASHBOARD_LABEL: 'Create Dashboard',
    EXPLORE_CTAS_REPORT_DESCRIPTION: 'Build a new report to showcase your business progress.',
    EXPLORE_CTAS_REPORT_LABEL: 'Create Report',
    EXPLORE_NAV_ASK: 'Ask your query',
    EXPLORE_NAV_RESULTS: 'Query results',
    EXPLORE_NAV_VIS: 'Visualization',
    EXPLORE_SEARCH_PLACEHOLDER: 'Type your query here, for example: "Avg freight for orderdate between June 1990 and June 2020"',
    EXPLORE_SEARCH_ISDATAMODELACCESS: "Your account has no permission to access data sources. Please contact your System Administrator for assistance.",
    EXPLORE_SEARCH_NLQ_NOT_CONFIGURED: 'NLQ not configured',
    NOTIFICATION_DOWNLOAD_COMPLETE: 'Download Complete',
    // RELATIONSHIP
    RELATIONSHIP_MESSAGE_CONFIRM_DELETE_RELATIONSHIP: 'Are you sure you want to delete the relationship?',
    RELATIONSHIP_MESSAGE_CONFIRM_DISABLE_RELATIONSHIP: 'Are you sure you want to disable the relationship?',
    RELATIONSHIP_MESSAGES_CONFIRM_SAVE_WITH_POSITION_ID:
      'There are some relationships which have positionID set. Thus, in report query, these relationships will be placed in order above all non-prioritized joins, regardless of the join type.',
    RELATIONSHIP_MESSAGES_CONFIRM_SAVE_WITHOUT_POSITION_ID:
      'Do you want to save all the relationships without priority setting?',
    RELATIONSHIP_MESSAGES_INVALID_MESSAGE:
      'There are some errors in the following relationships due to relationship duplication, PositionID duplication, and inconsistency in join fields data type. Please correct them before saving.',
    RELATIONSHIP_LABEL_RELATIONSHIP: 'Relationships',
    RELATIONSHIP_LABEL_VIEW_EXISTING: 'View existing relationships',
    RELATIONSHIP_LABEL_EXISTING_RELATIONSHIPS: 'Existing relationships',

    // REPORT DESIGNER
    REPORTDESIGNER_LABEL_JOIN_TYPE_INNER: 'Inner',
    REPORTDESIGNER_LABEL_JOIN_TYPE_FULL: 'Full',
    REPORTDESIGNER_LABEL_JOIN_TYPE_LEFT: 'Left',
    REPORTDESIGNER_LABEL_JOIN_TYPE_CROSS: 'Cross',
    REPORTDESIGNER_LABEL_JOIN_TYPE_RIGHT: 'Right',
    REPORTDESIGNER_LABEL_UNCATEGORIZED: 'Uncategorized',
    REPORTDESIGNER_FILTER_TOOLTIP:
      'The filter has become invalid due to the change in{0} data source. Please delete this filter or contact your System Administrator for assistance.',
    REPORTDESIGNER_LABEL_CRITERIA_LIST_SIMPLE_MODE_CATEGORY: 'Category',
    REPORTDESIGNER_LABEL_CRITERIA_LIST_SIMPLE_MODE_DATABASE_NAME: 'Database Name',
    REPORTDESIGNER_LABEL_CRITERIA_LIST_SIMPLE_MODE_DATA_OBJECT: 'Data Object',
    REPORTDESIGNER_LABEL_CRITERIA_LIST_SIMPLE_MODE_DATA_OBJECT_TYPE: 'Data Object Type',
    REPORTDESIGNER_LABEL_CRITERIA_LIST_SIMPLE_MODE_SCHEMA_NAME: 'Schema Name',
    REPORTDESIGNER_LABEL_CRITERIA_LIST_ADVANCED_MODE_JOIN_ALIAS: 'Join Alias',
    REPORTDESIGNER_LABEL_CRITERIA_LIST_ADVANCED_MODE_CATEGORY: 'Category',
    REPORTDESIGNER_LABEL_CRITERIA_LIST_ADVANCED_MODE_DATA_OBJECT: 'Data Object',
    REPORTDESIGNER_LABEL_CRITERIA_LIST_ADVANCED_MODE_JOIN_FIELD: 'Join Field',
    REPORTDESIGNER_LABEL_CRITERIA_LIST_ADVANCED_MODE_FOREIGN_DATA_OBJECT: 'Foreign Data Object',
    REPORTDESIGNER_LABEL_CRITERIA_LIST_ADVANCED_MODE_FIELD: 'Field',
    REPORTDESIGNER_MESSAGE_CONFIRM_DELETE_RELATIONSHIP: 'Are you sure you want to delete the relationship?',
    REPORTDESIGNER_MESSAGE_CONFIRM_DELETE_RELATIONSHIP_WITH_KEYJOIN:
      'Are you sure you want to delete the relationship and all its key joins?',
    REPORTDESIGNER_MESSAGE_DELETE_KEYJOIN: 'Are you sure you want to delete the key join?',
    REPORTDESIGNER_ALLOW_NULL_TOOLTIP: 'This turns all joins in the query created to full left joins.',
    REPORTDESIGNER_MESSAGE_COLUMN_NAME_REQUIRED: 'Column Name is required',
    REPORTDESIGNER_MESSAGE_FIELD_CANNOT_BE_FILTER: 'Field cannot be selected as a filter.',
    REPORTDESIGNER_MESSAGE_CANNOT_DROP_RELATIONSHIP_IN_KEYJOIN_DEST:
      'The relationship cannot be dropped in key join destination.',
    REPORTDESIGNER_MESSAGE_CANNOT_DROP_KEYJOIN_HAVING_CROSS_JOIN:
      'The key join cannot be dropped in relationship which has "Cross" as join type.',
    REPORTDESIGNER_MESSAGE_VALID_SQL_STATEMENT:
      'A valid SQL statement can be constructed from the given relationships.',
    REPORTDESIGNER_MESSAGE_VALID_FILTERLOGIC_STATEMENT:
      'A valid SQL statement can be constructed from the filter logic.',
    REPORTDESIGNER_MESSAGE_FIELD_NAME_EXISTS: 'This field name already exists.',
    REPORTDESIGNER_MESSAGE_FIELD_NAME_EXISTS_IN_REPORT_PART:
      'This field name alias already exists in "{0}" report part.',
    REPORTDESIGNER_MESSAGE_CONFIRM_SAVE_FILTER:
      'All the configuration of the current filter will be lost when it is changed to different field. Are you sure you want to select new field for the current filter?',
    REPORTDESIGNER_MESSAGE_ADJUST_NUMBER_DATA_OBJECTS:
      'The data source limitation has been configured to be less than the current number of selected data objects. Please adjust the number of selected data objects.',
    REPORTDESIGNER_MESSAGE_DATA_SOURCES_EXCEEDED_LIMITATION:
      'The number of selected data sources are exceeded the limitation',
    REPORTDESIGNER_FEATURE_NOT_AVAILABLE: 'This feature is not yet available with this software version',
    REPORTDESIGNER_MESSAGE_FIELDS_IN_REPORT_PART_EXCEEDED_LIMITATION:
      'The number of fields which are added in this report part exceeds the limitation',
    REPORTDESIGNER_MESSAGE_SIMPLE_UNSELECT:
      'You are unselecting a data object. The following errors could occur. <br/> <ul> <li> Any field which belongs to an unselected/removed data object will be removed from all report parts. </li> <li> Any filters using fields from an unselected/removed data object will be deleted. </li> <li> Any calculated fields or sub/grand totals associated with removed fields may need to be revised.</li> </ul> </br>Are you sure you want to unselect this data object?',
    REPORTDESIGNER_MESSAGE_ADVANCED_UNSELECT:
      'You are unselecting a data object. The following errors could occur. <br/> <ul> <li> Relationships among some other data objects could be broken and those data objects will be removed from other tabs in Report Designer. </li> <li> Any field which belongs to an unselected/removed data object will be removed from all report parts. </li> <li> Any filters using fields from an unselected/removed data object will be deleted.</li> <li> Any calculated fields or sub/grand totals associated with removed fields may need to be revised.</li> </ul> <br/> Are you sure you want to unselect this data object?',
    REPORTDESIGNER_MESSAGE_SELECT_CROSS_JOIN:
      'All the key joins will be deleted when "Cross" is selected as the join type. Are you sure you want to change the join type to "Cross"?',
    REPORTDESIGNER_MESSAGE_CHANGE_JOIN_TYPE:
      'The join type between "{0}" and "{1}" in the new relationship is different from the one defined in previous existing relationship(s). Are you sure you want to update join type between these two data objects in all existing relationship(s) to the new one',
    REPORTDESIGNER_MESSAGE_SAVE_BEFORE_PREVIEW:
      'You haven’t saved this new report yet. Please save it before previewing it in Report Viewer.',
    REPORTDESIGNER_MESSAGE_CONFIRM_PREVIEW:
      'You are about to preview the report in Report Viewer. Any unsaved changes will be lost. Do you want to continue?',
    REPORT_DESIGNER_MESSAGE_CONFIRM_QUICK_EDIT:
      'You are about to preview the report in Quick Edit. Any unsaved changes will be lost. Do you want to continue?',
    REPORT_DESIGNER_MESSAGE_CONFIRM_EDIT:
      'You are about to preview the report in Report Designer. Any unsaved changes will be lost. Do you want to continue?',
    REPORTDESIGNER_MESSAGE_CASCADING_CHANGED:
      'Cascading checkbox of some fields become unselected and disabled due to some setting changes from System Administration. Please save your report again to keep these changes.',
    REPORTDESIGNER_MESSAGE_RANGEONLY_CALCULATEDFIELD:
      'Range Only options are not compatible with calculated fields containing aggregate functions. Please adjust or remove these calculated fields before enabling this setting',
    REPORTDESIGNER_LABEL_DRILL_DOWN_STYLE_LINK_NEW_WINDOW: 'Link (New Window)',
    REPORTDESIGNER_LABEL_DRILL_DOWN_STYLE_EMBEDDED: 'Embedded',
    REPORTDESIGNER_LABEL_DRILL_DOWN_STYLE_POPUP: 'Popup',
    REPORTDESIGNER_MESSAGE_HINT_CATEGORY: '(Enter to create new Category)',
    REPORTDESIGNER_DASHBOARD_MESSAGE_HINT_CATEGORY: '(Enter to create new Dashboard)',
    REPORTDESIGNER_MESSAGE_HINT_SUB_CATEGORY: '(Enter to create new Sub-Category)',
    REPORTDESIGNER_LABEL_TABLE_DEF_SIMPLE_MODE_CATEGORY: 'Category',
    REPORTDESIGNER_LABEL_TABLE_DEF_SIMPLE_MODE_DATABASE_NAME: 'Database Name',
    REPORTDESIGNER_LABEL_TABLE_DEF_SIMPLE_MODE_SCHEMA_NAME: 'Schema Name',
    REPORTDESIGNER_LABEL_TABLE_DEF_SIMPLE_MODE_DATA_OBJECT: 'Data Object',
    REPORTDESIGNER_LABEL_TABLE_DEF_SIMPLE_MODE_DATA_OBJECT_TYPE: 'Data Object Type',
    REPORTDESIGNER_LABEL_TABLE_DEF_ADVANCED_MODE_ALIAS: 'Join Alias',
    REPORTDESIGNER_LABEL_TABLE_DEF_ADVANCED_MODE_OPERATOR: 'Operator',
    REPORTDESIGNER_LABEL_TABLE_DEF_ADVANCED_MODE_CATEGORY: 'Category',
    REPORTDESIGNER_LABEL_TABLE_DEF_ADVANCED_MODE_DATA_OBJECT: 'Data Object',
    REPORTDESIGNER_LABEL_TABLE_DEF_ADVANCED_MODE_SELECTED_JOIN_SOURCE_ALIAS: 'Data Object',
    REPORTDESIGNER_LABEL_TABLE_DEF_ADVANCED_MODE_JOIN_FIELD: 'Join Field',
    REPORTDESIGNER_LABEL_TABLE_DEF_ADVANCED_MODE_FOREIGN_CATEGORY: 'Category',
    REPORTDESIGNER_LABEL_TABLE_DEF_ADVANCED_MODE_FOREIGN_DATA_OBJECT: 'Foreign Data Object',
    REPORTDESIGNER_LABEL_TABLE_DEF_ADVANCED_MODE_FOREIGN_SOURCE_ALIAS: 'Foreign Data Object',
    REPORTDESIGNER_LABEL_TABLE_DEF_ADVANCED_MODE_FOREIGN_FIELD_NAME: 'Field',
    REPORTDESIGNER_LABEL_OPERATOR_TYPE_AND: 'And',
    REPORTDESIGNER_LABEL_OPERATOR_TYPE_OR: 'Or',
    REPORTDESIGNER_LABEL_DEFAULT_REPORT_NAME: 'Example Report Name',
    REPORTDESIGNER_LABEL_DEFAULT_TEMPLATE_NAME: 'Example Template Name',
    REPORTDESIGNER_LABEL_FIELDS_FILTERS_HEADER: 'Filter',
    REPORTDESIGNER_LABEL_FIELDS_SHOW_FILTERS: 'Show Filters',
    REPORTDESIGNER_LABEL_FIELDS_ADD_FILTER: 'Add Filter',
    REPORTDESIGNER_LABEL_FIELDS_ADD_FILTERS: 'Add Filters',
    REPORTDESIGNER_LABEL_FIELDS_FREEZE: 'Freeze',
    REPORTDESIGNER_LABEL_FIELDS_FILTER_LOGIC: 'Filter Logic',
    REPORTDESIGNER_LABEL_FIELDS_APPLY_FILTER_LOGIC: 'Apply Filter Logic',
    REPORTDESIGNER_LABEL_FIELDS_CLEAR_FILTER_LOGIC: 'Clear Filter Logic',
    REPORTDESIGNER_PLACEHOLDER_FIELDS_FILTER_LOGIC: 'Example (1 OR 2) AND (3 OR 4)',
    REPORTDESIGNER_LABEL_FIELDS_VALIDATE_SYNTAX: 'Validate Syntax',
    REPORTDESIGNER_MESSAGE_REPORT_NAME_REQUIRED: 'Report Name is required.',
    REPORTDESIGNER_MESSAGE_TEMPLATE_NAME_REQUIRED: 'Template Name is required.',
    REPORTDESIGNER_LABEL_PREVIEW_RECORD_TEN: '10',
    REPORTDESIGNER_LABEL_MENU_DEF_DESIGN: 'Design',
    REPORTDESIGNER_TOOLTIP_MENU_DEF_DESIGN:
      'Create report parts and filters, and use the fields to create your report body',
    REPORTDESIGNER_LABEL_MENU_DEF_FORMAT: 'Format',
    REPORTDESIGNER_TOOLTIP_MENU_DEF_FORMAT:
      'Customize your report with a header, footer, report title, and report description.',
    REPORTDESIGNER_LABEL_MENU_DEF_SCHEDULE: 'Schedule',
    REPORTDESIGNER_TOOLTIP_MENU_DEF_SCHEDULE:
      'Create scheduled instances and alerts for your report and share via email',
    REPORTDESIGNER_LABEL_MENU_DEF_ACCESS: 'Access',
    REPORTDESIGNER_TOOLTIP_MENU_DEF_ACCESS:
      'Set access rights to control who can see your report and what level of access they are allowed',
    REPORTDESIGNER_LABEL_DELETE_FILTER:
      'Data in the entire report will be re-queried when the filter is deleted. Are you sure you want to delete the filter?',
    REPORTDESIGNER_LABEL_CANNOT_DELETE_PARAM_SP:
      'This filter is to provide input for one of the selected stored procedures and it cannot be deleted.',
    REPORTDESIGNER_LABEL_APPLY_FILTER: 'Apply Filter',
    REPORTDESIGNER_LABEL_CLEAR_FILTER: 'Clear Filter',
    REPORTDESIGNER_LABEL_REFRESH_DATA: 'Refresh',
    REPORTDESIGNER_LABEL_PREVIEW_RECORDS: 'Preview Records',
    REPORTDESIGNER_LABEL_ADD_RELATIONSHIP: 'Add Relationship',
    REPORTDESIGNER_LABEL_DISTINCT: 'Distinct',
    REPORTDESIGNER_LABEL_ALLOW_NULLS: 'Allow nulls',
    REPORTDESIGNER_LABEL_ADD_KEY_JOIN: 'Add Key Join',
    REPORTDESIGNER_TOOLTIP_COPY_KEY_JOIN: 'Copy Key Join',
    REPORTDESIGNER_TOOLTIP_COPY_RELATIONSHIP: 'Copy Relationship',
    REPORTDESIGNER_TOOLTIP_DELETE_KEY_JOIN: 'Delete Key Join',
    REPORTDESIGNER_TOOLTIP_DELETE_RELATIONSHIP: 'Delete Relationship',
    REPORTDESIGNER_TOOLTIP_REPORT_FOOTER: 'Report Footer',
    REPORTDESIGNER_TOOLTIP_REPORT_HEADER: 'Report Header',
    REPORTDESIGNER_MESSAGE_ITEM_NAME_REQUIRED: 'Item name is required.',
    REPORTDESIGNER_TOOLTIP_REPORT_TITLE_AND_DESCRIPTION: 'Report Title & Description',
    REPORTDESIGNER_LABEL_REPORT_PART_PROPERTIES: 'Report Part Properties',
    REPORTDESIGNER_LABEL_FORMAT_PROPERTIES: 'Format Properties',
    REPORTDESIGNER_PLACEHOLDER_PASTE_JAVASCRIPT_CODE: 'Paste your javascript code here...',
    REPORTDESIGNER_MESSAGE_DO_NOT_SUPPORT: 'Do not support',
    REPORTDESIGNER_LABEL_VIEW_SETTING_AS: 'You would like to view this setting as:',
    REPORTDESIGNER_LABEL_ENTIRE_CHART: 'Entire Chart',
    REPORTDESIGNER_LABEL_PLOT_AREA: 'Plot Area',
    REPORTDESIGNER_LABEL_Y_AXIS_UPPER: 'Y-Axis',
    REPORTDESIGNER_TOOLTIP_USE_EXISTING_Y_AXIS: 'Use the Y-axis of an existing metric',
    REPORTDESIGNER_TOOLTIP_APPLIED_TO: 'Applied to',
    REPORTDESIGNER_TOOLTIP_X_AXIS_LOWER: 'X-axis',
    REPORTDESIGNER_TOOLTIP_Y_AXIS_LOWER: 'Y-axis',
    REPORTDESIGNER_TOOLTIP_X_AXIS_UPPER: 'X-Axis',
    REPORTDESIGNER_TOOLTIP_Y_AXIS_UPPER: 'Y-Axis',
    REPORTDESIGNER_LABEL_ENABLED_ZOOM_CONTROL: 'Display Zoom Control',
    REPORTDESIGNER_LABEL_HORIZONTAL_ALIGNMENT: 'Horizontal Alignment',
    REPORTDESIGNER_LABEL_VERTICAL_ALIGNMENT: 'Vertical Alignment',
    REPORTDESIGNER_LABEL_LAYOUT: 'Layout',
    REPORTDESIGNER_LABEL_BORDER: 'Border',
    REPORTDESIGNER_LABEL_INTERVALS: 'Intervals',
    REPORTDESIGNER_LABEL_STARTING_POINT: 'Starting Point',
    REPORTDESIGNER_LABEL_POSITION: 'Position',
    REPORTDESIGNER_LABEL_ENDING_POINT: 'Ending Point',
    REPORTDESIGNER_LABEL_THRESHOLD_LABEL_SETTINGS: 'Threshold Label Settings',
    REPORTDESIGNER_LABEL_COPY_SETTING: 'Copy setting',
    REPORTDESIGNER_LABEL_DELETE_SETTING: 'Delete setting',
    REPORTDESIGNER_LABEL_ENABLED: 'Enabled',
    REPORTDESIGNER_LABEL_TO_CREATE_REPORT_PART: 'To create a report part',
    REPORTDESIGNER_LABEL_SELECT_A_TYPE: 'Select a Type: ',
    REPORTDESIGNER_LABEL_REPORT_BODY: 'Report Body',
    REPORTDESIGNER_MESSAGE_MUST_BE_FRONT_SIDE_TO_RUN: 'Must be front side to run this',
    REPORTDESIGNER_LABEL_NUMBER_OF_RECORDS: 'Number of Records',
    REPORTDESIGNER_LABEL_EDIT_REPORT_PART_NAME: 'Edit Report Part Name',
    REPORTDESIGNER_LABEL_SET_NEW_REPORT_PART_NAME: 'Set New Report Name',
    REPORTDESIGNER_LABEL_REVERT_REPORT_PART_NAME: 'Revert Report Name',
    REPORTDESIGNER_LABEL_DRAG_FIELD: 'Drag or ',
    REPORTDESIGNER_LABEL_ADD_NEW_FIELD: 'Add a field',
    REPORTDESIGNER_LABEL_DROP_FIELD: 'Drop',
    REPORTDESIGNER_LABEL_FIELD_SELECTION: 'Field Selection',
    REPORTDESIGNER_LABEL_ADD_FILTER_SELECTION: 'Filter Selection',
    REPORTDESIGNER_LABEL_METRICS: 'Metrics',
    REPORTDESIGNER_LABEL_GRANDTOTAL_FOR: '{0} for {1}',
    REPORTDESIGNER_LABEL_OPEN_ACTIONS: 'Open Actions',
    REPORTDESIGNER_LABEL_OPEN_SUBREPORT: 'Open SubReport',
    REPORTDESIGNER_LABEL_OPEN_LINK: 'Open Link',
    REPORTDESIGNER_LABEL_PERFORM_ACTION: 'Perform Action',
    REPORTDESIGNER_LABEL_TITLE_SETTINGS: 'Title Settings',
    REPORTDESIGNER_LABEL_DESCRIPTION_SETTINGS: 'Description Settings',
    REPORTDESIGNER_LABEL_LABELS: 'Labels',
    REPORTDESIGNER_LABEL_X_AXIS_NAME: '{0} (X-axis)',
    REPORTDESIGNER_LABEL_Y_AXIS_NAME: '{0} (Y-axis)',
    REPORTDESIGNER_LABEL_X_AXIS_LABELS: 'Labels (X-axis)',
    REPORTDESIGNER_LABEL_Y_AXIS_VALUES: 'Values (Y-axis)',
    REPORTDESIGNER_LABEL_TOTAL_LABEL: 'Total Label',
    REPORTDESIGNER_LABEL_SEPARATORS: 'Separators',
    REPORTDESIGNER_PLACEHOLDER_CHART_GOES_HERE: '<Chart Goes here>',
    REPORTDESIGNER_PLACEHOLDER_GAUGE_GOES_HERE: '<Gauge Goes here>',
    REPORTDESIGNER_PLACEHOLDER_KPI_GOES_HERE: '<KPI Goes here>',
    REPORTDESIGNER_PLACEHOLDER_ERROR: '<h1>error</h1>',
    REPORTDESIGNER_LABEL_SHOW_TOTAL: 'Show Total',
    REPORTDESIGNER_LABEL_SETTINGS: 'Settings',
    REPORTDESIGNER_LABEL_CHART_LINE: 'Line',
    REPORTDESIGNER_LABEL_CHART_AREA: 'Area',
    REPORTDESIGNER_LABEL_CHART_SETTINGS: 'Chart Settings',
    REPORTDESIGNER_LABEL_REPORT_PART_USED: 'Report Part(s) Used',
    REPORTDESIGNER_LABEL_EMBEDDED_REPORT_SETTINGS: 'Embedded Report Settings',
    REPORTDESIGNER_PLACEHOLDER_DUMMY_REPORT_PART_FORM: 'Dummy Data Report Part Form',
    REPORTDESIGNER_LABEL_FIND_AND_REPLACE: 'Find and Replace',
    REPORTDESIGNER_LABEL_FIND: 'Find',
    REPORTDESIGNER_LABEL_REPLACE: 'Replace',
    REPORTDESIGNER_LABEL_REPLACE_WITH: 'Replace with',
    REPORTDESIGNER_LABEL_SPELL_CHECKER: 'Spell Checker',
    REPORTDESIGNER_LABEL_SUBTOTAL: 'Subtotal',
    REPORTDESIGNER_LABEL_GRAND_TOTAL: 'Grand Total',
    REPORTDESIGNER_LABEL_PRIMARY_KPI: 'Primary KPI',
    REPORTDESIGNER_LABEL_UNIT_LABEL: 'Unit Label',
    REPORTDESIGNER_LABEL_SCALE: 'Scale',
    REPORTDESIGNER_LABEL_SUPPLEMENTARY_KPI: 'Supplementary KPI',
    REPORTDESIGNER_LABEL_THRESHOLD_SETTINGS: 'Threshold Settings',
    REPORTDESIGNER_LABEL_ROWS: 'Rows',
    REPORTDESIGNER_LABEL_COLUMNS: 'Columns',
    REPORTDESIGNER_LABEL_GROUPS: 'Groups',
    REPORTDESIGNER_LABEL_VALUES: 'Values',
    REPORTDESIGNER_LABEL_ADD_SIDE_TOTAL: 'Add Side Total',
    REPORTDESIGNER_LABEL_REMOVE_EXTRA_COLUMN_SIDE_TOTAL: 'Remove Extra Side Total Column(s)',
    REPORTDESIGNER_LABEL_USE_EXPANDERS: 'Use Expanders',
    REPORTDESIGNER_LABEL_TOTAL_FOR: 'Total for {0}',
    REPORTDESIGNER_MESSAGE_NO_RESULT_FOUND: 'No result found.',
    REPORTDESIGNER_LABEL_POINT_OPTIONS: 'Point Options',
    REPORTDESIGNER_LABEL_ADD_ITEM: 'Add Item',
    REPORTDESIGNER_LABEL_REPORT_NAME: 'Report Name',
    REPORTDESIGNER_LABEL_TEMPLATE_NAME: 'Template Name',
    REPORTDESIGNER_LABEL_SUB_CATEGORY: 'Sub-category',
    REPORTDESIGNER_LABEL_ADD_REPORT_PART: 'Add Report Part',
    REPORTDESIGNER_LABEL_DATA_AUTO_REFRESHED: 'Data Auto Refreshed',
    REPORTDESIGNER_LABEL_UPDATE_INTERVAL: 'Update Interval',
    REPORTDESIGNER_LABEL_SPECIFY_DESTINATION: 'Specify the destination info to {0} the',
    REPORTDESIGNER_MESSAGE_CHANGE_SCHEMA_NON_DYNAMIC:
      'The returned field names corresponding to this data source based on the given filter value is different from the one in data model. Please contact your System Administrator to re-define the correct setting for the stored procedure.',
    REPORTDESIGNER_MESSAGE_CHANGE_SCHEMA_DYNAMIC:
      'The returned field names corresponding to the selected filter value are different from the ones in Data Source screen. The previously selected filter value will be reverted for the filter.',
    REPORTDESIGNER_LOGGING_VIEWER_MODE: 'Get Data Report Part Content in Report Viewer',
    REPORTDESIGNER_LOGGING_MODE: 'Get Data Report Part Content in Report Designer',
    REPORTDESIGNER_LOGGING_EMBEDDED_REPORT_PART: 'Get Data for Report Part Container (embedded)',
    REPORTDESIGNER_LABEL_REPORT_BODY_SNAP_MODE_CHECKBOX: 'Snap to Grid',
    REPORTDESIGNER_FILTER_FIELDS_TYPE_VALIDATE:
      'Only “AND” conditions can be used when the Filters section contains both aggregated and non-aggregated fields. The current filter logic will be removed.',
    REPORTDESIGNER_FILTER_FIELDS_TYPE_VALIDATE_INFO:
      'Any subreports which are inheriting filters will automatically use “AND” conditions between filters',
    REPORTDESIGNER_FILTER_LOGIC_REPORT: 'Filter logic in this report was altered to use “AND” conditions only',
    REPORTDESIGNER_FILTER_LOGIC_SUBREPORT:
      'Filter logic in the embedded subreport was altered to use “AND” conditions only',
    REPORTDESIGNER_FILTER_SHOW_TOOLTIP: 'Show Filters Under Report Description',
    REPORTDESIGNER_ADD_FILTER_TOOLTIP: 'Add new filter',
    REPORTDESIGNER_DATASOURCE_OVERLAY_LABEL:
      'Please select a data source from the middle panel to begin creating your report',
    REPORTDESIGNER_UPDATE_RESULT:
      'Please press "Apply Filter" button after adjusting filter configurations to avoid data inconsistency.',
    REPORTDESIGNER_DRILL_OTHERS_POPUP_LABEL: "Others' items",
    NO_VALUE_FOUND: 'No value found',
    REPORTDESIGNER_LABEL_DELIMITER_VALUE: 'Delimiter Values',
    REPORTDESIGNER_NEWLINE_DELIMITER_PLACEHOLDER:
      'Please paste your data with new line delimiter and press enter for apply that delimiter.',
    REPORTDESIGNER_ADD_NEW_REPORT_PART: 'Add New Report Part',
    REPORTDESIGNER_TOOLTIP_CHARTMETRIC: 'Please click on this icon to slide down the list of metrics.',
    REPORTDESIGNER_CALCULATEDFIELDS_LABEL: 'Calculated Fields',

    // CROSS FILTERING
    CROSSFILTERING_OPTION_LABEL: 'Cross Filtering',
    CROSSFILTERING_OPTION_TOOLTIP: 'Cross Filtering Settings',
    CROSSFILTERING_PREVIOUS_TOOLTIP: 'Scroll to Left',
    CROSSFILTERING_NEXT_TOOLTIP: 'Scroll to Right',
    CROSSFILTERING_REMOVE_TOOLTIP: 'Remove this cross filter',
    CROSSFILTERING_REMOVE_ALL_TOOLTIP: 'Remove all cross filters',
    CROSSFILTERING_REMOVE_ALL_CONFIRM: 'Are you sure you want to remove all cross filters?',
    CROSSFILTERING_HEADER_TOOLTIP: 'Select minimum 2 report parts for cross filters, at least 1 report part should be drilldown.',

    // KPI
    KPI_GRID_MENU_IMAGE: 'Image Tile',
    KPI_GRID_MENU_METRIC: 'Metric Tile',
    KPI_GRID_MENU_TEXT: 'Text Tile',
    REPORT_PART_PROPS_KPI_CELL_SIZE: 'Cell Size (px)',
    REPORT_PART_PROPS_KPI_COLS: 'Number of Columns',
    REPORT_PART_PROPS_KPI_ROWS: 'Number of Rows',
    REPORT_PART_PROPS_KPI_BACKGROUND_IMAGE: 'Background Image',
    REPORT_PART_PROPS_KPI_BACKGROUND_IMAGE_POPUP_HEADER: 'KPI Background Image',

    // Tile Properties
    TILE_PROPERTIES_PANEL_TITLE: 'Tile Properties',

    // SCHEMA
    SCHEMA_ZOOM: 'Zoom',

    // CONNECTION
    CONNECTION_LABEL_ADD_CONNECTION: 'Add Connector',
    CONNECTION_DELETE_MESSAGE:
      'All data items available in the current data model associated with this connection will be removed. Global Database Mapping may stop working properly either. Are you sure you want to delete this connection?',
    CONNECTION_OVERRIDE_EXCEL_MESSAGE: 'Do you want to replace the data source with new file?',
    CONNECTION_INVISIBLE_MESSAGE:
      'The current data items associated with this connection will be made visible in the data model. Are you sure you want to make all data associated visible?',
    CONNECTION_VISIBLE_MESSAGE:
      'The current data items associated with this connection will be made hidden in the data model. Are you sure you want to make all data associated hidden?',
    CONNECTION_DELETED_DATASOURCE_MESSAGE:
      'This report contains data sources which are have been deleted. Please edit the report to correct any errors.',
    CONNECTION_OVERRIDE_MESSAGE:
      'All data items available in the current data model associated with this connection will be removed. Are you sure you want to override it?',
    CONNECTION_MISMATCH_CONNECIONSTRING_DATASOURCE:
      'The Connection String you entered does not match with the list of data sources. Please Reconnect to retreive updated data first.',
    CONNECTION_NEW_CONNECTIONSTRING_DIFFERENT_SCHEMA:
      'You changed the connection. The new data model will be loaded. Are you sure you want to change the connection?',
    CONNECTION_GUIDECONTENT: 'You can select the item or group to move between Available and Visible Data Sources.',
    CONNECTION_REVERSE_CONNECTION_STRING:
      'Connection String is invalid. The system will continue to use the previous valid Connection String.',
    CONNECTION_TYPE_CONNECT: 'Connect',
    CONNECTION_TYPE_RECONNECT: 'Reconnect',
    CONNECTION_REQUIRE_CONNECTION_STRING: 'Connection String is required.',
    CONNECTION_IS_DUPLICATED: 'Connection String already exist in another connection.',
    CONNECTION_REQUIRE_DATABASE_NAME: 'Database Name is required.',
    CONNECTION_MAX_LENGTH_DATABASE_NAME: 'Maximum length of Database Name is 150 characters.',
    CONNECTION_GUIDE_CONTENT: 'You can select the item or group to move between Available and Visible Data Source.',
    CONNECTION_NEW_DATA_SOURCE: 'New data source.',
    CONNECTION_DELETED_DATA_SOURCE: 'Deleted data source.',
    CONNECTION_DATA_SOURCE_CHANGES: 'Data source changes.',
    CONNECTION_UNKNOWN_STATUS: 'Unknown',
    CONNECTION_VALID_STATUS: 'Valid',
    CONNECTION_INVALID_STATUS: 'Invalid',
    CONNECTION_DETECT_CHANGE_ICON_TOOLTIP: 'Data source changes',
    CONNECTION_EMPTY_NAME_LABEL: '<Empty>',
    CONNECTION_ADVANCED_OPTIONS: 'Advanced Options',
    CONNECTION_ADVANCED_OPTIONS_SHOW_LESS: 'Show Less',
    CONNECTION_LABEL_DATABASE_NAME: 'Connector Name',
    CONNECTION_LABEL_DATA_SERVER_TYPE: 'Data Server Type',
    CONNECTION_LABEL_CONNECTION_STRING: 'Connection String',
    CONNECTION_LABEL_CONNECTION_BUILDER: 'Edit Connection',
    CONNECTION_LABEL_CONNECTION_BUILDER_UPLOAD: 'Upload Data File',
    CONNECTION_AVAILABLE_DATA_SOURCE: 'Available Data Sources',
    CONNECTION_VISIBLE_DATA_SOURCE: 'Visible Data Sources',
    CONNECTION_CAN_NOT_MOVE_CUSTOM_VIEW:
      'There is a data source which has same name or alias with this data source, so you cannot move it to Visible Data Sources box.',

    // CONNECTION MASTER
    CONNECTION_MASTER_POPUP_TITLE: 'Choose Data Server Type',
    CONNECTION_MASTER_POPUP_TITLE2: 'Set Up Connection',

    // CONNECTION STRING BUILDER
    CONNECTION_STRING_BUILDER_REQUIRED_SERVER_NAME: 'Server Name is required.',
    CONNECTION_STRING_BUILDER_REQUIRED_DATABASE: 'Database is required.',
    CONNECTION_STRING_BUILDER_STANDARD_AUTHENTICATION: 'Standard',
    CONNECTION_STRING_BUILDER_TRUSTED_AUTHENTICATION: 'Trusted',
    CONNECTION_STRING_BUILDER_TEXT_AUTHENTICATION: 'Authentication',
    CONNECTION_STRING_BUILDER_LABEL_SERVER_NAME: 'Server Name',
    CONNECTION_STRING_BUILDER_LABEL_DATABASE: 'Database',
    CONNECTION_STRING_BUILDER_LABEL_DATABASE_CONNECTION: 'Database Connection',

    // REQUEST BUILDER
    CONNECTION_STRING_BUILDER_REST_TITLE: 'REST Adaptor Connection String Builder',
    CONNECTION_STRING_BUILDER_REST_ENDPOINT_NAME: 'Endpoint Name',
    CONNECTION_STRING_BUILDER_REST_ENDPOINT_NAME_HINT: 'The name of the current endpoint',
    CONNECTION_STRING_BUILDER_REST_LABEL_ADDRESS: 'Address',
    CONNECTION_STRING_BUILDER_REST_LABEL_ADDRESS_HINT: 'Rest API server address, e.g. "http://someserver.aa:12345"',
    CONNECTION_STRING_BUILDER_REST_LABEL_SCHEMEPATH: 'Scheme Path',
    CONNECTION_STRING_BUILDER_REST_LABEL_SCHEMEPATH_HINT: '(Optional) Rest API path which returns list of tables. It may be in formats:\n - API path, e.g. "/path/to/scheme"\n - List of table names, e.g. "[Table1, Table2, ...., TableN]"\n - Empty. In this case table name parameter will be ignored and endpoint will contain only 1 table with data from data path.',
    CONNECTION_STRING_BUILDER_REST_LABEL_DATAPATH: 'Data Path',
    CONNECTION_STRING_BUILDER_REST_LABEL_DATAPATH_HINT: 'Rest API path which returns tables data, e.g. "/path/to/data/{0}". Supported optional parameter: \n - {0} - table name',
    CONNECTION_STRING_BUILDER_REST_LABEL_FLATTENARRAYS: 'Flatten Arrays',
    CONNECTION_STRING_BUILDER_REST_LABEL_FLATTENOBJECTS: 'Flatten Objects',
    CONNECTION_STRING_BUILDER_REST_LABEL_DBNAME: 'Database Name',
    CONNECTION_STRING_BUILDER_REST_LABEL_FLATTENDEPTH: 'Flatten Depth',
    CONNECTION_STRING_BUILDER_REST_LABEL_SCHEMENAME: 'Scheme Name',
    CONNECTION_STRING_BUILDER_REST_LABEL_SEPARATOR: 'Sub-column Separator',
    CONNECTION_STRING_BUILDER_REST_LABEL_CACHE_SETTINGS: 'Cache settings',
    CONNECTION_STRING_BUILDER_REST_LABEL_CACHE_ENABLED: 'Request Cache Enabled',
    CONNECTION_STRING_BUILDER_REST_LABEL_CACHE_TTL: 'Request Cache TTL',
    CONNECTION_STRING_BUILDER_ADD_ENDPOINT: 'Add New Endpoint',
    CONNECTION_STRING_BUILDER_REST_VALIDATION1: 'Some required values are blank',
    CONNECTION_STRING_BUILDER_REST_VALIDATION2: 'Endpoint name should be unique',
    CONNECTION_STRING_BUILDER_REST_LOAD_PRESET: 'Load preset',
    REQUEST_BUILDER_HEADERS_TITLE: 'Request Headers',
    REQUEST_BUILDER_BODY_TITLE: 'Request Body',
    REQUEST_BUILDER_TABLE_HEADER_KEY: 'Key',
    REQUEST_BUILDER_TABLE_HEADER_VALUE: 'Value',
    REQUEST_BUILDER_HEADERS_PRESETS: 'Presets',

    // QUERY_SOURCE_TYPE_CONFIG
    QUERY_SOURCE_TYPE_CONFIG_MESSAGE_REQUIRE_PARAMETER:
      'The stored procedures requires NOT NULL for input parameter. System cannot get the schema at this time.',
    QUERY_SOURCE_TYPE_CONFIG_MESSAGE_CHANGE_PROCEDURE_TYPE:
      'The stored procedure will be changed to dynamic. The fields of dynamic stored procedures are only available in the report designer. The current fields will be removed, are you sure you want to change the stored procedure type?',
    QUERY_SOURCE_TYPE_CONFIG_MESSAGE_CHANGE_FIELD:
      'A field which was visible/filterable has been changed and any report associated with these fields will be affected. Are you sure you want to make this change?',
    QUERY_SOURCE_TYPE_CONFIG_MESSAGE_DELETE_CUSTOM_VIEW:
      'Are you sure you want to delete this view? Any reports/templates which are using this view will no longer be valid.',
    QUERY_SOURCE_TYPE_CONFIG_LABEL_CRITERIALIST_DATABASE_NAME: 'Database Name',
    QUERY_SOURCE_TYPE_CONFIG_LABEL_CRITERIALIST_FUNCTION_NAME: 'Function Name',
    QUERY_SOURCE_TYPE_CONFIG_LABEL_DEFAULT_CRITERIA_LIST_CATEGORY: 'Category',
    QUERY_SOURCE_TYPE_CONFIG_LABEL_DEFAULT_CRITERIA_LIST_DATABASE_NAME: 'Database Name',
    QUERY_SOURCE_TYPE_CONFIG_LABEL_DEFAULT_CRITERIA_LIST_DATA_SOURCE_NAME: 'Data Source Name',
    QUERY_SOURCE_TYPE_CONFIG_LABEL_DEFAULT_CRITERIA_LIST_DATA_SOURCE_ALIAS: 'Data Source Alias',
    QUERY_SOURCE_TYPE_CONFIG_LABEL_DEFAULT_CRITERIA_LIST_COLUMN_NAME: 'Column Name',
    QUERY_SOURCE_TYPE_CONFIG_LABEL_DEFAULT_CRITERIA_LIST_COLUMN_ALIAS: 'Column Alias',
    QUERY_SOURCE_TYPE_CONFIG_LABEL_CATEGORY_COLUMN_ENTER_TO_CREATE_COLUMN: '(Enter to create new category)',
    QUERY_SOURCE_TYPE_CONFIG_LABEL_FILTER_VALUE_ENTER_TO_CREATE_NEW_FILTER_VALUE: '(Enter to create new filter value)',

    // DATA_MODEL_CONSTANTS
    DATA_MODEL_CONSTANTS_TITLE_MENU_TABLE: 'Tables',
    DATA_MODEL_CONSTANTS_TITLE_MENU_VIEW: 'Views',
    DATA_MODEL_CONSTANTS_TITLE_MENU_STORED_PROCEDURES: 'Stored Procedures',
    DATA_MODEL_CONSTANTS_TITLE_MENU_FUNCTIONS: 'Functions',
    DATA_MODEL_CONSTANTS_TITLE_MENU_RELATIONSHIP: 'Relationships',
    DATA_MODEL_CONSTANTS_TITLE_MENU_SCHEMA: 'Schema',
    DATA_MODEL_CONSTANTS_NEW_DATA_SOURCE: 'New data source.',
    DATA_MODEL_CONSTANTS_DATA_SOURCE_CHANGES: 'Data source changes.',
    DATA_MODEL_CONSTANTS_DELETED_DATA_SOURCE: 'Deleted data source.',
    DATA_MODEL_CONSTANTS_NEW_FIELD: 'New field.',
    DATA_MODEL_CONSTANTS_DATA_TYPE_CHANGES: 'Data type changes.',
    DATA_MODEL_CONSTANTS_DELETED_FIELD: 'Deleted field.',
    DATA_MODEL_CONSTANTS_CHANGED_INDICATOR: '2',
    DATA_MODEL_CONSTANTS_TITLE_QUERY_SOURCE_TYPE_CATEGORY: 'Category',
    DATA_MODEL_CONSTANTS_TITLE_QUERY_SOURCE_TYPE_DATABASE_NAME: 'Database Name',
    DATA_MODEL_CONSTANTS_TITLE_QUERY_SOURCE_TYPE_SOURCE_NAME: 'Database Source Name',
    DATA_MODEL_CONSTANTS_TITLE_QUERY_SOURCE_TYPE_FUNCTION_NAME: 'Function Name',
    DATA_MODEL_CONSTANTS_TITLE_QUERY_SOURCE_TYPE_SOURCE_ALIAS: 'Database Source Alias',
    DATA_MODEL_CONSTANTS_TITLE_QUERY_SOURCE_TYPE_RETURNED_VALUE: 'Returned Value',
    DATA_MODEL_CONSTANTS_TITLE_QUERY_SOURCE_TYPE_INPUT_PARAMS: 'Input Params',
    DATA_MODEL_CONSTANTS_TITLE_QUERY_SOURCE_TYPE_FIELD_LEVEL: 'Field Level',
    DATA_MODEL_CONSTANTS_TITLE_QUERY_SOURCE_TYPE_EXPRESSION_LEVEL: 'Expression Level',
    DATA_MODEL_CONSTANTS_TITLE_QUERY_SOURCE_TYPE_DYNAMIC: 'Dynamic',
    DATA_MODEL_CONSTANTS_TITLE_QUERY_SOURCE_TYPE_DETAIL_COLUMN_NAME: 'Column Name',
    DATA_MODEL_CONSTANTS_TITLE_QUERY_SOURCE_TYPE_DETAIL_COLUMN_ALIAS: 'Column Alias',
    DATA_MODEL_CONSTANTS_TITLE_QUERY_SOURCE_TYPE_DETAIL_FILTER_VALUE: 'Filter Value',
    DATA_MODEL_CONSTANTS_TITLE_QUERY_SOURCE_TYPE_DETAIL_FILTERABLE: 'Filterable',
    DATA_MODEL_CONSTANTS_RELATIONSHIP_JOIN_FIELD: 'Join Field',
    DATA_MODEL_CONSTANTS_RELATIONSHIP_FIELD: 'Field',
    DATA_MODEL_CONSTANTS_RELATIONSHIP_DISABLED: 'Disabled',
    DATA_MODEL_LABEL_EXPORT: 'Export',
    DATA_MODEL_LABEL_ADD_CUSTOM_VIEW: 'Add Custom View',
    DATA_MODEL_LABEL_EDIT_CUSTOM_VIEW: 'Edit Custom View',
    DATA_MODEL_LABEL_ADD_CUSTOM_VIEW_VIEW_NAME: 'View Name',
    DATA_MODEL_LABEL_ADD_CUSTOM_VIEW_DATABASE_NAME: 'Database Name',
    DATA_MODEL_LABEL_ADD_CUSTOM_VIEW_SCHEMA_NAME: 'Schema Name',
    DATA_MODEL_LABEL_ADD_CUSTOM_VIEW_QUERY: 'Query',
    DATA_MODEL_LABEL_ADD_CUSTOM_VIEW_SAVE_EXECUTE: 'Save & Execute',
    DATA_MODEL_LABEL_ADD_CUSTOM_VIEW_SAVE_SUCCESSFUL_MESSAGE:
      'The hidden filters if set in configuration file would be added to this view based on the returned field name',
    DATA_MODEL_CONSTANTS_DELETED_FUNCTION: 'Deleted function.',
    DATA_MODEL_CONSTANTS_FUNCTION_CHANGE: 'Function changes.',
    DATA_MODEL_CONSTANTS_FUNCTION_ADD: 'Function add',
    DATA_MODEL_MESSAGE_PLEASE_SELECT_DATASOURCE: 'Please select data sources to export',
    DATA_MODEL_TOOLTIP_RELATIONSHIP_DISABLED: 'Checking this will prevent this relationship from loading automatically in the report designer.',
    DATA_MODEL_TOOLTIP_INVALID_FILTER_LOOKUP_CONNECTION:
      'The current field(s) {0} could not be found because the database is not currently visible. Please check your Connection String page.',
    DATA_MODEL_TOOLTIP_INVALID_FILTER_LOOKUP_QUERY_SOURCE:
      'The current field(s) {0} could not be found because the object is not currently visible in the connection. Please check your Connection String page.',
    DATA_MODEL_TOOLTIP_INVALID_FILTER_INVISIBLE_BOTH_FIELD:
      'The current field(s) {0} could not be found because it is not currently visible in the Data Model. Please check your Data Model Setting page.',
    DATA_MODEL_TOOLTIP_INVALID_FILTER_INVISIBLE_FIELD:
      'The current field {0} could not be found because it is not currently visible in the Data Model. Please check your Data Model Setting page.',
    DATA_MODEL_TOOLTIP_INVALID_FILTER_TENANT_BOTH_FIELD:
      'The current field(s) {0} could not be found because it is set as Tenant Field in Advanced Settings. Please check your Advanced Settings - Security page.',
    DATA_MODEL_TOOLTIP_INVALID_FILTER_TENANT_FIELD:
      'The current field {0} could not be found because it is set as Tenant Field in Advanced Settings. Please check your Advanced Settings - Security page.',
    DATA_MODEL_UNAVAILABLE_DATA_SOURCE:
      'The report is invalid because data source(s)/field(s) cannot be found or filter field(s) are unfilterable. Please switch to Data Source tab to modify it or contact System Administrator for assistance.',

    // CALCULATED_FIELD_CONSTANTS
    CALCULATED_FIELD_CONSTANTS_FUNCTION_NAME_NONE: '[None]',
    CALCULATED_FIELD_CONSTANTS_FUNCTION_NAME_EXPRESSION: '[Expression]',
    CALCULATED_FIELD_CONSTANTS_FUNCTION_NAME_DEFAULT: 'Default',
    CALCULATED_FIELD_CONSTANTS_FUNCTION_NAME_AVERAGE: 'Average',
    CALCULATED_FIELD_CONSTANTS_FUNCTION_NAME_COUNT: 'Count',
    CALCULATED_FIELD_CONSTANTS_FUNCTION_NAME_COUNT_DISTINCT: 'Count Distinct',
    CALCULATED_FIELD_CONSTANTS_FUNCTION_NAME_MAXIMUM: 'Maximum',
    CALCULATED_FIELD_CONSTANTS_FUNCTION_NAME_MINIMUM: 'Minimum',
    CALCULATED_FIELD_CONSTANTS_FUNCTION_NAME_SUM: 'Sum',
    CALCULATED_FIELD_CONSTANTS_FUNCTION_NAME_SUM_DISTINCT: 'Sum Distinct',
    CALCULATED_FIELD_CONSTANTS_LABEL_DATA_TYPES_NUMERIC: 'Numeric',
    CALCULATED_FIELD_CONSTANTS_LABEL_DATA_TYPES_DATETIME: 'Datetime',
    CALCULATED_FIELD_CONSTANTS_LABEL_DATA_TYPES_BOOLEAN: 'Boolean',
    CALCULATED_FIELD_CONSTANTS_LABEL_DATA_TYPES_MONEY: 'Money',
    CALCULATED_FIELD_CONSTANTS_LABEL_DATA_TYPES_LOB: 'Lob',
    CALCULATED_FIELD_CONSTANTS_LABEL_DATA_TYPES_TEXT: 'Text',
    CALCULATED_FIELD_CONSTANTS_LABEL_DATA_TYPES_IMAGE: 'Image',
    CALCULATED_FIELD_CONSTANTS_FUNCTION_TYPE_ADD_TITLE: 'Add Calculated Field',
    CALCULATED_FIELD_CONSTANTS_FUNCTION_TYPE_ADD_NAME: 'Column Name',
    CALCULATED_FIELD_CONSTANTS_FUNCTION_TYPE_EDIT_TITLE: 'Edit Calculated Field',
    CALCULATED_FIELD_CONSTANTS_FUNCTION_TYPE_EDIT_NAME: 'Column Name',
    CALCULATED_FIELD_CONSTANTS_FUNCTION_TYPE_GRAND_TOTAL_TITLE: 'Grand Total Settings',
    CALCULATED_FIELD_CONSTANTS_FUNCTION_TYPE_GRAND_TOTAL_NAME: 'Grand Total Label',
    CALCULATED_FIELD_CONSTANTS_FUNCTION_TYPE_GRAND_TOTAL_FUNCTION_LABEL: 'Grand Total Function',
    CALCULATED_FIELD_CONSTANTS_FUNCTION_TYPE_SUB_TOTAL_TITLE: 'Subtotal Settings',
    CALCULATED_FIELD_CONSTANTS_FUNCTION_TYPE_SUB_TOTAL_NAME: 'Subtotal Label',
    CALCULATED_FIELD_CONSTANTS_FUNCTION_TYPE_SUB_TOTAL_FUNCTION_LABEL: 'Subtotal Function',
    CALCULATED_FIELD_CONSTANTS_MESSAGE_EXPRESSION_CONSTRAINT: 'Expression is required.',
    CALCULATED_FIELD_CONSTANTS_TITLE_EXPRESSION_SELECTION_TABS_FIELD_NAME: 'Field Names',
    CALCULATED_FIELD_CONSTANTS_TITLE_EXPRESSION_SELECTION_TABS_FUNCTION_OPERATOR: 'Functions/Operators',
    CALCULATED_FIELD_CONSTANTS_FIELD_NAME_INSTRUCTION: 'Select field to proceed',
    CALCULATED_FIELD_CONSTANTS_FUNCTION_OPERATOR_INSTRUCTION: 'Select function to proceed',
    CALCULATED_FIELD_CONSTANTS_TABLE_DEFINITION_FIELD_NAME_FIELD_NAME: 'Field Name',
    CALCULATED_FIELD_CONSTANTS_TABLE_DEFINITION_FIELD_NAME_DESCRIPTION: 'Description',
    CALCULATED_FIELD_CONSTANTS_TABLE_DEFINITION_FUNCTION_OPERATOR_NAME: 'Function Name',
    CALCULATED_FIELD_CONSTANTS_TABLE_DEFINITION_FUNCTION_OPERATOR_SYNTAX: 'Syntax',
    CALCULATED_FIELD_CONSTANTS_MESSAGE_DELETE_CALCULATED_FIELD: 'Are you sure you want to delete the calculated field?',
    CALCULATED_FIELD_CONSTANTS_MESSAGE_DELETE_CALCULATED_FIELD_REPORT_PART:
      'Any report part created from the calculated field will not be viewable when the calculated field is deleted. Are you sure you want to delete the calculated field?',
    CALCULATED_FIELD_CONSTANTS_MESSAGE_RESULT_CANNOT_FORMATED:
      'Result cannot be formatted with the selected data type.',
    CALCULATED_FIELD_CONSTANTS_MESSAGE_DUPLICATE_NAME: 'The column name {0} already exists',
    CALCULATED_FIELD_MESSAGE_INVALID_NAME: "A field name can't contain any of the following characters: '[', ']'",
    CALCULATED_FIELD_MESSAGE_HAS_BEEN_USED:
      'This calculated field is in use in one or more of the following places: other calculated fields, report part field containers, filters, subtotal, grand total, dynamic thresholds. Please remove these instances first.',
    CALCULATED_FIELD_MESSAGE_MISSING_DATA_TYPE: 'Missing data type',
    CALCULATED_FIELD_DEFAULT_SORT_MESSAGE: 'has been sorted in ascending order.',

    //PREDICTED FIELD CONSTANTS
    PREDICTED_FIELD_CONSTANTS_FUNCTION_TYPE_ADD_TITLE: 'Add Predicted Field',
    PREDICTED_FIELD_CONSTANTS_FUNCTION_TYPE_EDIT_TITLE: 'Edit Predicted Field',
    PREDICTED_CLASSIFICATION: 'CLASSIFICATION',
    PREDICTED_PREDICTION: 'PREDICTION ',
    PREDICTED_FIELD_DELETE_COLUMN: 'Do you want to delete this predicted field ?',
    PREDICTED_FIELD_CONSTANTS_MESSAGE_DELETE_PREDICTED_FIELD_REPORT_PART:
      'Any report part created from the predicted field will not be viewable when the predicted field is deleted. Are you sure you want to delete the predicted field?',
    PREDICTED_FIELD_EMPTY: 'This Field is required',
    PREDICTED_FIELD_CONSTANTS_MESSAGE_DUPLICATE_NAME: 'The column name {0} already exists',
    // COPY_MANAGEMENT_WORK_SPACE_LIST
    COPY_MANAGEMENT_WORK_SPACE_LIST_ADD_WORKSPACE: 'Add Workspace',
    COPY_MANAGEMENT_WORK_SPACE_LIST_SHOW_ONLY_MY_WORKSPACES: 'Show only my workspaces',

    // COPY_MANAGEMENT_WORKSPACE_DETAIL
    COPY_MANAGEMENT_WORKSPACE_DETAIL_LABEL_COPY_ONLY_SETTINGS: 'Only Settings',
    COPY_MANAGEMENT_WORKSPACE_DETAIL_LABEL_DATA_CONNECTOR: 'Data Connectors',
    COPY_MANAGEMENT_WORKSPACE_DETAIL_LABEL_DATA_MODEL: 'Data Model',
    COPY_MANAGEMENT_WORKSPACE_DETAIL_LABEL_ADVANCED_DATA_SETTING: 'Advanced Data Settings',
    COPY_MANAGEMENT_WORKSPACE_DETAIL_LABEL_SYSTEM_CONFIGURATION: 'System Configuration',
    COPY_MANAGEMENT_WORKSPACE_DETAIL_LABEL_TENANT_PERMISSIONS: 'Tenant Permissions',
    COPY_MANAGEMENT_WORKSPACE_DETAIL_LABEL_ROLES: 'Roles',
    COPY_MANAGEMENT_WORKSPACE_DETAIL_LABEL_SELECT_ROLES_TO_COPY: 'Please select roles to copy',
    COPY_MANAGEMENT_WORKSPACE_DETAIL_LABEL_SELECT_SYSYEM_CONFIGURATION_TO_COPY: 'Please select items to copy',
    COPY_MANAGEMENT_WORKSPACE_DETAIL_LABEL_SET_DESCRIPTION: 'Set Description',
    COPY_MANAGEMENT_WORKSPACE_DETAIL_LABEL_REVERT_DESCRIPTION: 'Revert Description',
    COPY_MANAGEMENT_WORKSPACE_DETAIL_LABEL_RENAME: 'Rename',
    COPY_MANAGEMENT_WORKSPACE_DETAIL_LABEL_LAST_MODIFIED: 'Last modified',
    COPY_MANAGEMENT_WORKSPACE_DETAIL_LABEL_SET_WORKSPACE_NAME: 'Set Workspace Name',
    COPY_MANAGEMENT_WORKSPACE_DETAIL_LABEL_REVERT_WORKSPACE_NAME: 'Revert Workspace Name',
    COPY_MANAGEMENT_WORKSPACE_DETAIL_LABEL_ADD_MAPPING: 'Add Mapping',
    COPY_MANAGEMENT_WORKSPACE_DETAIL_LABEL_DATA_MODEL_OVERWRITE_CONFIRMATION:
      'Copy Data Model - Overwrite Confirmation',
    COPY_MANAGEMENT_WORKSPACE_DETAIL_LABEL_ADVANCED_DATA_SETTING_OVERWRITE_CONFIRMATION:
      'Copy Advanced Data Settings - Overwrite Confirmation',
    COPY_MANAGEMENT_WORKSPACE_DETAIL_LABEL_REPORT_OVERWRITE_CONFIRMATION: 'Copy Reports - Overwrite Confirmation',
    COPY_MANAGEMENT_WORKSPACE_DETAIL_LABEL_TENANT_PERMISSIONS_OVERWRITE_CONFIRMATION:
      'Copy Tenant Permissions - Overwrite Confirmation',
    COPY_MANAGEMENT_WORKSPACE_DETAIL_LABEL_ROLE_PERMISSIONS_OVERWRITE_CONFIRMATION:
      'Copy Role Permissions - Overwrite Confirmation',
    COPY_MANAGEMENT_WORKSPACE_DETAIL_LABEL_SOURCE: 'Source',
    COPY_MANAGEMENT_WORKSPACE_DETAIL_LABEL_DESTINATION: 'Destination',
    COPY_MANAGEMENT_WORKSPACE_DETAIL_LABEL_DESTINATIONS: 'Destination(s)',
    COPY_MANAGEMENT_WORKSPACE_DETAIL_LABEL_ADD_WORKSPACE: 'Add Workspace',
    COPY_MANAGEMENT_WORKSPACE_DETAIL_LABEL_MERGE_DUPLICATE_MAPPINGS: 'Merge Duplicate Mappings',
    COPY_MANAGEMENT_WORKSPACE_DETAIL_LABEL_DATA_MODEL_SETTING: 'Data Model Setting',
    COPY_MANAGEMENT_WORKSPACE_DETAIL_LABEL_ITEMS_TO_COPY: 'Items to Copy:',
    COPY_MANAGEMENT_WORKSPACE_DETAIL_LABEL_ALL_TENANTS: 'All Tenants',
    COPY_MANAGEMENT_WORKSPACE_DETAIL_LABEL_COPY_RELATIONSHIP_POSITION_ID: 'Copy Relationship PositionID',
    COPY_MANAGEMENT_WORKSPACE_DETAIL_LABEL_COPY_FILTER_VALUES: 'Copy Report/Dashboard filter values',
    COPY_MANAGEMENT_WORKSPACE_DETAIL_LABEL_COPY_ROLE_PERMISSIONS: 'Copy Role Permissions',
    COPY_MANAGEMENT_WORKSPACE_DETAIL_RUN_COPY_OVERWRITE_CONFIRM_DATA_MODEL_INFORMATION:
      'Below connection strings have setup data model already.',
    COPY_MANAGEMENT_WORKSPACE_DETAIL_RUN_COPY_OVERWRITE_CONFIRM_DATA_MODEL_CONFIRMATION:
      'Please select which connection string you want to overwritten after copied?',
    COPY_MANAGEMENT_WORKSPACE_DETAIL_RUN_COPY_OVERWRITE_CONFIRM_ADVANCED_SETTING_INFORMATION:
      "Below destination's tenants have different advanced settings.",
    COPY_MANAGEMENT_WORKSPACE_DETAIL_RUN_COPY_OVERWRITE_CONFIRM_ADVANCED_SETTING_CONFIRMATION:
      "Please select which destination's tenants you want to overwrite after copied?",
    COPY_MANAGEMENT_WORKSPACE_DETAIL_RUN_COPY_OVERWRITE_CONFIRM_TENANT_PERMISSIONS_INFORMATION:
      "Below destination's tenants have different permission with source's tenant.",
    COPY_MANAGEMENT_WORKSPACE_DETAIL_RUN_COPY_OVERWRITE_CONFIRM_TENANT_PERMISSIONS_CONFIRMATION:
      "Please select which destination's tenants you want to overwrite after copied?",
    COPY_MANAGEMENT_WORKSPACE_DETAIL_RUN_COPY_OVERWRITE_CONFIRM_ROLE_PERMISSIONS_INFORMATION:
      "Below roles of destination's tenants have different permissions with roles of source's tenant.",
    COPY_MANAGEMENT_WORKSPACE_DETAIL_RUN_COPY_OVERWRITE_CONFIRM_ROLE_PERMISSIONS_CONFIRMATION:
      "Please select which roles in destination's tenant you want to overwrite after copied?",
    COPY_MANAGEMENT_WORKSPACE_DETAIL_RUN_COPY_OVERWRITE_CONFIRM_REPORT_INFORMATION:
      "Below reports are currently existing in destination's tenants",
    COPY_MANAGEMENT_WORKSPACE_DETAIL_RUN_COPY_OVERWRITE_CONFIRM_REPORT_CONFIRMATION:
      "Please select which reports in destination's tenants you want to overwrite after copied?",
    COPY_MANAGEMENT_WORKSPACE_DETAIL_NO_RUN_COPY_INFO_MESSAGE: 'There are no data for running copy.',
    COPY_MANAGEMENT_WORKSPACE_DETAIL_LABEL_TEMPLATE_OVERWRITE_CONFIRMATION: 'Copy Templates - Overwrite Confirmation',
    COPY_MANAGEMENT_WORKSPACE_DETAIL_RUN_COPY_OVERWRITE_CONFIRM_TEMPLATE_INFORMATION:
      "Below templates are currently existing in destination's tenants",
    COPY_MANAGEMENT_WORKSPACE_DETAIL_RUN_COPY_OVERWRITE_CONFIRM_TEMPLATE_CONFIRMATION:
      "Please select which templates in destination's tenants you want to overwrite after copied?",
    COPY_MANAGEMENT_WORKSPACE_DETAIL_PLEASE_SELECT_DATASOURCE: 'Please select data source to copy',
    COPY_MANAGEMENT_WORKSPACE_DETAIL_PLEASE_SELECT_DASHBOARD: 'Please select dashboards to copy',
    COPY_MANAGEMENT_WORKSPACE_DETAIL_PLEASE_SELECT_DATA_CONNECTOR: 'Please select data connectors to copy',
    COPY_MANAGEMENT_WORKSPACE_DETAIL_PLEASE_SELECT_REPORT: 'Please select reports to copy',
    COPY_MANAGEMENT_WORKSPACE_DETAIL_DESTINATION_GRID: 'Destination Grid',
    COPY_MANAGEMENT_WORKSPACE_DETAIL_LABEL_DASHBOARD_OVERWRITE_CONFIRMATION: 'Copy Dashboards - Overwrite Confirmation',
    COPY_MANAGEMENT_WORKSPACE_DETAIL_RUN_COPY_OVERWRITE_CONFIRM_DASHBOARD_INFORMATION:
      "Below dashboards are currently existing in destination's tenants",
    COPY_MANAGEMENT_WORKSPACE_DETAIL_RUN_COPY_OVERWRITE_CONFIRM_DASHBOARD_CONFIRMATION:
      "Please select which dashboards in destination's tenants you want to overwrite after copied?",

    // COPY MANAGEMENT
    COPY_MANAGEMENT_LABEL_DATA_ADVANCED_OPTIONS: 'Data Advanced Options:',
    COPY_MANAGEMENT_LABEL_DEFAULT_WORKSPACE_NAME: 'Workspace',
    COPY_MANAGEMENT_LABEL_UNKNOWN_STATUS: 'Unknown',
    COPY_MANAGEMENT_MESSAGE_WORKSPACE_NAME_CONSTRAINT_PRESENCE: 'Workspace Name is required.',
    COPY_MANAGEMENT_MESSAGE_WORKSPACE_NAME_CONSTRAINT_LENGTH: 'Workspace Name can contain at most only 150 characters.',
    COPY_MANAGEMENT_MESSAGE_DESTINATION_CONSTRAINT: 'Destination(s) is required.',
    COPY_MANAGEMENT_MESSAGE_CONFIRM_DELETE_WORKSPACE: 'Are you sure you want to delete this workspace?',
    COPY_MANAGEMENT_MESSAGE_CONFIRM_DELETE_TENANT: 'Are you sure you want to delete tenant {0}?',
    COPY_MANAGEMENT_MESSAGE_STATUS_DEST_NEED_VALIDATION: 'Needs Validation',
    COPY_MANAGEMENT_MESSAGE_STATUS_DEST_READY_TO_COPY: 'Ready To Copy',
    COPY_MANAGEMENT_MESSAGE_STATUS_DEST_MISSING_AUTHEN: 'Authentication Missing',
    COPY_MANAGEMENT_MESSAGE_STATUS_DEST_VALIDATION_ERROR: 'Validation Error',
    COPY_MANAGEMENT_VALIDATION_ERROR_TOOLTIP:
      'One or more of the selected objects in the source model were not found using the connection string for this tenant. Please correct this issue or remove this tenant from the destination selection.',
    COPY_MANAGEMENT_MESSAGE_SAVE_WORKSPACE_CONSTRAINTS_NAME: 'Name is required.',
    COPY_MANAGEMENT_MESSAGE_SAVE_WORKSPACE_CONSTRAINTS_OWNER: 'Owner is required.',
    COPY_MANAGEMENT_MESSAGE_SAVE_WORKSPACE_CONSTRAINTS_WORKSPACE_NAME: 'The workspace name is required.',
    COPY_MANAGEMENT_LABEL_TABLE_DEF_GLOBAL_MAPPING_FROM_DB_NAME: 'Database Name',
    COPY_MANAGEMENT_LABEL_TABLE_DEF_GLOBAL_MAPPING_TO_DB_NAME: 'Database Name',
    COPY_MANAGEMENT_LABEL_MAPPING_HEADER_GLOBAL: 'All Mappings',
    COPY_MANAGEMENT_LABEL_MAPPING_HEADER_TENANT: 'Mappings',
    COPY_MANAGEMENT_LABEL_MAPPING_TYPE_SCHEMA: 'Schema',
    COPY_MANAGEMENT_LABEL_MAPPING_TYPE_DATABASE: 'Database',
    COPY_MANAGEMENT_MESSAGE_CONSISTENT_DATA_MODEL: 'Consistent Data Model',
    COPY_MANAGEMENT_MESSAGE_INCONSISTENT_DATA_MODEL: 'Inconsistent Data Model',
    COPY_MANAGEMENT_MESSAGE_CHANGED_DATA_TYPE: 'Different Data Type.',
    COPY_MANAGEMENT_MESSAGE_DELETED_DATA_SOURCE: 'Deleted data source.',
    COPY_MANAGEMENT_MESSAGE_OVERRIDE_CONFIRMATION_HAVING_SETUP:
      'Below connection strings have setup data model already.',
    COPY_MANAGEMENT_MESSAGE_OVERRIDE_CONFIRMATION_SELECT_TO_OVERWRITTEN:
      'Please select which connection string you want overwritten after copied?',
    COPY_MANAGEMENT_MESSAGE_COPY_PROCESS_DONE: 'The copy process is complete',
    COPY_MANAGEMENT_MESSAGE_COPY_FILTER_LOOKUP:
      "We didn't validate but copy the filter value settings for some fields in data model. Please check yourself the validity of those settings in your Data Model page.",
    COPY_MANAGEMENT_LABEL_DATE_MODEL_COMPARISON: 'Data Model Comparison',
    COPY_MANAGEMENT_LABEL_ADVANCED_SETTINGS: 'Advanced Settings',
    COPY_MANAGEMENT_NO_RESULT_TEXT: 'No result',
    COPY_MANAGEMENT_LABEL_REFRESH: 'Refresh',
    COPY_MANAGEMENT_LABEL_VALIDATE: 'Validate',
    COPY_MANAGEMENT_LABEL_RUN_COPY: 'Run Copy',
    COPY_MANAGEMENT_LABEL_ADD_FIELD: 'Add Calculated Field',
    COPY_MANAGEMENT_LABEL_PREDICTED_FIELD: ' Add Predicted Field',
    COPY_MANAGEMENT_LABEL_EXECUTE: 'Execute',
    COPY_MANAGEMENT_TITLE_POPUP_CONFIGURE_SCHEDULE: 'Configure Schedule',
    COPY_MANAGEMENT_MERGE_DUPLICATE_TOOLTIP:
      'Checking this box will allow the system to automatically merge any duplicate mappings found below. If one source is mapped to multiple destinations, it will be merged to one mapping.',
    COPY_MANAGEMENT_ALL_MAPPING_TOOLTIP: 'This section shows all mappings between source and all destinations.',
    COPY_MANAGEMENT_OBJECT_TOOLTIP:
      'Supported Variables:\n @TenantID \n @TenantName \nGiven: \n @TenantID = TenantA \n @TenantName = TenantA LLC \nVariables can be used alone: \n @TenantID -> TenantA \nOr as part of an expression: \n {Northwind_@TenantID} -> Northwind_TenantA \n {Northwind @TenantName} -> Northwind TenantA LLC',
    COPY_MANAGEMENT_SPECIFIC_MAPPING_TOOLTIP:
      'This section shows all mappings between source and this specific destination.',

    // DATABASE MAPPING
    DATABASE_MAPPING_BUTTON_ADD_MAPPING: 'Add Mapping',
    DATABASE_MAPPING_LABEL_MAPPING_DROPBOX: 'Mapping',
    DATABASE_MAPPING_CHECKBOX_MERGE_DUPLICATE_MAPPINGS: 'Merge Duplicate Mappings',
    DATABASE_MAPPING_LABEL_TABLE_DEF_GLOBAL_MAPPING_FROM_DB_NAME: 'Database Name',
    DATABASE_MAPPING_LABEL_TABLE_DEF_GLOBAL_MAPPING_TO_DB_NAME: 'Database Name',
    DATABASE_MAPPING_ALL_TENANTS: 'All',
    DATABASE_MAPPING_LABEL_TENANT_COLUMN: 'Tenant(s)',
    DATABASE_MAPPING_ALL_MAPPINGS: 'All Mappings',

    // LICENSE CHECKER
    LICENSE_CHECKER_LABEL_DATA_SERVER_TYPE: 'Data Server Type',
    LICENSE_CHECKER_LABEL_CONNECTION_STRING: 'Connection String',
    LICENSE_CHECKER_LABEL_CONNECTION_BUILDER: 'Connection Builder',
    LICENSE_CHECKER_MESSAGE_CONNECTION_STRING_INVALID: 'The Connection String is invalid. Please enter a valid one.',
    LICENSE_CHECKER_MESSAGE_CONNECT_ERROR:
      'A network-related or instance-specific error occurred while establishing a connection to <Data Server Type>. The server was not found or was not accessible. Verify that the instance name is correct and that <Data Server Type> is configured to allow remote connections.',
    LICENSE_CHECKER_MESSAGE_CANNOT_OPEN_DATABASE:
      'Cannot open database "<input database name>" requested by the login.',
    LICENSE_CHECKER_MESSAGE_LOGIN_FAILED: 'Login failed for user "<input username>"',
    LICENSE_CHECKER_MESSAGE_CONFIRM_OVERRIDE_CONNECTION_STRING:
      'After validation, the license is stored in the configuration database. Please revalidate the license when the Connection String has been modified. Are you sure you want to override the current Connection String?',
    LICENSE_CHECKER_MESSAGE_INVALID_CONNECTION_STRING:
      'Connection String is invalid. The system will continue to use the previous valid Connection String.',
    LICENSE_CHECKER_MESSAGE_CONNECTION_STRING_DESCRIPTION:
      'Enter the Connection String for the System Configuration Database',
    LICENSE_CHECKER_MESSAGE_CONNECTION_STRING_CONSTRAINT: 'Connection String is required.',
    // LICENSE CHECKER - LICENSE INFO
    LICENSE_CHECKER_MESSAGE_CONFIRM_CHANGE_TO_OFFLINE:
      'You are changing the license mode from Online to Offline, please enter the offline token. Are you sure you want to change the license mode?',
    LICENSE_CHECKER_MESSAGE_CONFIRM_CHANGE_TO_ONLINE:
      'You are changing the license mode from Offline to Online. Are you sure you want to change the license mode?',
    LICENSE_CHECKER_MESSAGE_LICENSE_KEY_INVALID: 'The license key is invalid. Please input a valid one.',
    LICENSE_CHECKER_MESSAGE_TOKEN_INVALID: 'The token is invalid. Please input a valid one.',
    LICENSE_CHECKER_MESSAGE_DAYS_TILL_EXPIRED: '{0} day(s) until the license is expired',
    LICENSE_CHECKER_MESSAGE_DAYS_EXPIRED: 'The license expired {0} days ago',
    LICENSE_CHECKER_MESSAGE_EXPIRED: 'The license is expired. Please enter a valid license.',
    LICENSE_CHECKER_MESSAGE_NEW_LICENSE_OR_TOKEN_INVALID:
      'This license/token is invalid. The system will continue to use the previous valid license and valid token.',
    LICENSE_CHECKER_MESSAGE_VALIDATE_ON_OR_AFTER:
      'License Key is valid from {0} to {1}. Please validate on or after {0}.',
    LICENSE_CHECKER_MESSAGE_TOKEN_REQUIRED: '"Token" is required.',
    LICENSE_CHECKER_MESSAGE_LICENSE_KEY_REQUIRED: '"License Key" is required.',
    LICENSE_CHECKER_MESSAGE_LICENSE_NO_LONGER_VALID:
      'This license is no longer valid. Please contact your Account Manager for assistance.',
    LICENSE_CHECKER_MESSAGE_NEW_LICENSE_INVALID:
      'This license is invalid. The system will continue to use the previous valid license.',
    LICENSE_CHECKER_MESSAGE_LOST_CONNECTION_TO_LICENSE_SERVER:
      'Unable to contact the license validation server. This license will expire in 96 hours if a connection is not re-established.',
    LICENSE_CHECKER_MESSAGE_ENTER_LICENSE_DESCRIPTION: 'Enter the License for the System Configuration Database',
    LICENSE_CHECKER_MESSAGE_LICENSE_KEY_CONSTRAINT: 'License Key is required.',
    LICENSE_CHECKER_MESSAGE_TOKEN_CONSTRAINT: 'Token is required.',
    LICENSE_CHECKER_LABEL_LICENSE_INFORMATION: 'License Information',
    LICENSE_CHECKER_LABEL_CURRENT_DURATION: 'Current Duration',
    LICENSE_CHECKER_LABEL_CURRENT_MODULE: 'Current Module',
    LICENSE_CHECKER_LABEL_PREVIOUS_DURATION: 'Previous Duration',
    LICENSE_CHECKER_LABEL_PREVIOUS_MODULE: 'Previous Module',
    LICENSE_CHECKER_LABEL_NEXT_DURATION: 'Next Duration',
    LICENSE_CHECKER_LABEL_NEXT_MODULE: 'Next Module',
    LICENSE_CHECKER_LABEL_READY_PURCHASE: 'Ready to Purchase?',
    LICENSE_CHECKER_LABEL_RENEW_LICENSE: 'Renew License?',
    LICENSE_CHECKER_LABEL_UPGRADE_ENCRYPTION: 'You can upgrade the encryption of your license key to 256-bit encryption.',
    // LICENSE_CHECKER - IMPORT DATA MAP
    LICENSE_CHECKER_LABEL_IMPORT_MAP_DATA: 'Import Map Data',
    LICENSE_CHECKER_LABEL_PROVISION_MAP_DATA: 'Provision Map Data',
    LICENSE_CHECKER_LABEL_PROVISION_MAP_DATA_TOOLTIP:
      'Run "Provision Map Data" to upgrade map data in the configuration database.',
    // LICENSE_CHECKER - LICENSE VALIDATION INPUT
    LICENSE_CHECKER_LABEL_LICENSE_MODE: 'License Mode',
    LICENSE_CHECKER_LABEL_OFFLINE: 'Offline',
    LICENSE_CHECKER_LABEL_ONLINE: 'Online',
    LICENSE_CHECKER_LABEL_LICENSE_KEY: 'License Key',
    LICENSE_CHECKER_LABEL_TOKEN: 'Token',
    LICENSE_CHECKER_LABEL_ALERTING: 'Alerting',
    LICENSE_CHECKER_LABEL_FORM: 'Form',
    LICENSE_CHECKER_LABEL_DASHBOARD: 'Dashboard',
    LICENSE_CHECKER_LABEL_REPORTTEMPLATE: 'Report Template/ Component',
    LICENSE_CHECKER_LABEL_SCHEDULING: 'Scheduling',
    LICENSE_CHECKER_LABEL_EXPORTING: 'Exporting',
    LICENSE_CHECKER_LABEL_REPORTDESIGNER: 'Report Designer',
    LICENSE_CHECKER_LABEL_CHARTING: 'Charting',
    LICENSE_CHECKER_LABEL_MAPS: 'Maps',
    LICENSE_CHECKER_LABEL_MachineLearning: 'Machine Learning',
    // LICENSE CHECKER - SYSTEM MODE
    LICENSE_CHECKER_SYSTEM_MODE_DESCRIPTION: 'Select the System Mode Settings',
    LICENSE_CHECKER_LABEL_SYSTEM_MODE: 'System Mode',
    LICENSE_CHECKER_LABEL_USER_ID_PROPERTIES: 'User ID Properties',
    LICENSE_CHECKER_LABEL_SINGLE_TENANT: 'Single Tenant',
    LICENSE_CHECKER_LABEL_MULTI_TENANT: 'Multi-Tenant',
    LICENSE_CHECKER_LABEL_ALLOW_DUPLICATE_USER: 'Allow duplicated user ID in system-wide',
    LICENSE_CHECKER_MESSAGE_CONFIRM_SINGLE_TO_MULTI:
      'Are you sure you want to switch from Single Tenant to Multi-Tenant mode? All users will become system users in Multi-Tenant mode.',
    LICENSE_CHECKER_MESSAGE_CONFIRM_MULTI_TO_SINGLE:
      'Are you sure you want to switch from Multi-Tenant to Single Tenant mode?',
    LICENSE_CHECKER_MESSAGE_CHANGE_CONNECTION:
      'You are required to login to perform further configuration. Please use the default system account info to login.',

    // EMAIL
    EMAIL_MESSAGE_CONSTRAINT: 'Email is required.',
    EMAIL_MESSAGE_VALIDATION: 'The following email is not valid: ',
    EMAIL_LABEL_TO: 'To',
    EMAIL_LABEL_CC: 'CC',
    EMAIL_LABEL_SUBJECT: 'Email Subject',
    EMAIL_LABEL_ATTACHMENT: 'Attachment Type',
    EMAIL_LABEL_METHOD: 'Delivery Method',
    EMAIL_TOOLTIP_COMPOSE_EMAIL: 'Email',
    EMAIL_LABEL_EMAIL_INFO: 'Email Info',
    EMAIL_LABEL_EMAIL_BODY: 'Email Body',
    EMAIL_LABEL_DISPLAY_NAME: 'Display Name',
    EMAIL_LABEL_EMAIL_FROM_ADDRESS: 'Email From Address',
    EMAIL_LABEL_SENDING: 'Sending ...',
    EMAIL_MESSAGE_SENT_SUCCESSFULLY: 'Email was sent successfully. Do you want to continue sending more emails?',
    EMAIL_MESSAGE_SENT_FAIL:
      'An error occurred while sending, the email was not sent. Do you want to continue sending more emails?',

    // SMTP CONFIGURATION
    SMTP_CONFIGURATION_LABEL_USE_SYSTEM_CONFIGURATION: 'Use System Configuration',
    SMTP_CONFIGURATION_LABEL_USE_CUSTOM_CONFIGURATION: 'Use Custom Configuration',
    SMTP_CONFIGURATION_LABEL_SMTP_CONFIGURATION: 'SMTP Configuration',
    SMTP_CONFIGURATION_LABEL_SMTP_SERVER: 'SMTP Server',
    SMTP_CONFIGURATION_LABEL_SMTP_PORT: 'SMTP Port',
    SMTP_CONFIGURATION_LABEL_SMTP_SECURE_CONNECTION: 'SMTP Secure Connection (SSL/TLS)',
    SMTP_CONFIGURATION_LABEL_SMTP_LOGIN: 'SMTP Login',
    SMTP_CONFIGURATION_LABEL_SMTP_PASSWORD: 'SMTP Password',

    // TENANT_CONSTANT
    TENANT_CONSTANT_MESSAGE_CANCEL: 'Are you sure you want to cancel the changes?',
    TENANT_CONSTANT_MESSAGE_SAVE: 'Are you sure you want to save all of the modifications?',
    TENANT_CONSTANT_MESSAGE_DELETE:
      'Deleting this Tenant will delete all data belonging to the tenant, Data Model, Users, Roles, Reports, Dashboards, Scheduled Instances, etc. Are you sure you want to delete this Tenant?',
    TENANT_CONSTANT_MESSAGE_DEACTIVATE:
      'Deactivating this tenant will restrict access to its users. Are you sure you want to deactivate?',
    TENANT_CONSTANT_MESSAGE_TENANT_ID_CONSTRAINT: 'Tenant ID is required.',
    TENANT_CONSTANT_MESSAGE_TENANT_NAME_CONSTRAINT: 'Tenant Name is required.',
    TENANT_CONSTANT_TENANT_PERMISSIONS_AVAILABLE_TREE_HEADER: 'Available Roles/Users',
    TENANT_CONSTANT_TENANT_PERMISSIONS_SHARE_WITH_TREE_HEADER: 'Roles/Users allowed to share with',
    TENANT_CONSTANT_REPORT_AVAILABLE_TREE_HEADER: 'Available Categories',
    TENANT_CONSTANT_REPORT_VISIBLE_TREE_HEADER: 'Visible Categories',
    TENANT_CONSTANT_REPORT_SAVABLE_TREE_HEADER: 'Categories allowed for saving reports',
    TENANT_CONSTANT_DASHBOARD_AVAILABLE_TREE_HEADER: 'Available Categories',
    TENANT_CONSTANT_DASHBOARD_VISIBLE_TREE_HEADER: 'Visible Categories',
    TENANT_CONSTANT_DASHBOARD_SAVABLE_TREE_HEADER: 'Categories allowed for saving dashboards',
    TENANT_SELECT_ALL: 'Select All',
    TENANT_TOOLTIP_DEFINITION_TYPE: 'Report and Dashboard definitions',
    TENANT_TOOLTIP_IFRAME: 'I-Frame',

    // TENANT_DETAIL_TAB
    TENANT_DETAIL_TAB_TENANT_NAME: 'Tenant Name',

    // TENANT_DETAIL_MODULES
    TENANT_DETAIL_MODULES_LABEL_MODULES: 'Modules',

    //PREDICTION SETTINGS MODULE
    PREDICTION_SETTINGS_LABEL_TITLE: 'ML Service Configuration',
    NLQ_PREDICTION_SETTINGS_LABEL_TITLE: 'NLQ Service Configuration',
    PREDICTION_SETTINGS_LABEL_PREDICTION_SERVICE: 'Prediction Service IP Address',
    PREDICTION_SETTINGS_LABEL_PREDICTION_DB_CONNECTION_STRING: 'Database Connection String',

    //MACHINE_LEARNING SETTINGS MODULE
    MACHINE_LEARNING_SETTINGS_LABEL_TITLE: 'ML Service Configuration',
    MACHINE_LEARNING_SETTINGS_LABEL_PREDICTION_SERVICE: 'ML Service IP Address',
    MACHINE_LEARNING_SETTINGS_LABEL_PREDICTION_DB_CONNECTION_STRING: 'Database Connection String',

    //NLQ CONFIGURATION SETTINGS MODULE
    NLQ_CONFIGURATION_SETTINGS_LABEL_TITLE: 'NLQ Configuration',
    NLQ_SETTINGS_LABEL_PREDICTION_SERVICE: 'NLQ Service IP Address',
    NLQ_CONFIGURATION_SETTINGS_DATACONNECTORS: 'Data connectors',
    NLQ_CONFIGURE_ERROR_MESSAGE: 'Please Configure NLQ',
    NLQ_CONFIGURATION_SEARCH_MODE: 'Search Mode',
    NLQ_CONFIGURATION_SEARCH_MODE_GUIDED: 'Guided',
    NLQ_CONFIGURATION_SEARCH_MODE_NATURAL: 'Natural',
    NLQ_CONFIGURATION_SERVER_TEST: 'Test',
    NLQ_CONFIGURATION_CONFIG_BUTTON: 'Configure NLQ',
    NLQ_CONFIGURATION_RESET_BUTTON: 'Reset NLQ',

    // PERMISSION
    PERMISSION_LABEL_TENANT_ACCESS: 'Tenant Access',
    PERMISSION_LABEL_ACCESS_LIMITS: 'Access Limits',
    PERMISSION_LABEL_ACCESS_DEFAULT: 'Access Defaults',
    PERMISSION_LABEL_CONFIGURE_SECURITY_OPTIONS: 'Configure Security Options',
    PERMISSION_LABEL_DASHBOARDS: 'Dashboards',

    // PERMISSION DASHBOARD/REPORT BODY
    PERMISSION_LABEL_CATEGORY_ACCESSIBILITY: 'Category Accessibility',
    PERMISSION_LABEL_CONFIGURE_ACCESS_RIGHT: 'Configure Access Rights',
    PERMISSION_LABEL_OVERWRITE_EXISTING_DASHBOARD: 'Overwrite Existing Dashboard',
    // PERMISSION DASHBOARD HEADER
    PERMISSION_LABEL_CAN_CREATE_DASHBOARD: 'Can create new dashboard?',
    PERMISSION_LABEL_DISPLAY_TILE_HEADER_IN_UNEDITABLE_DASHBOARD: 'Display tile header in uneditable dashboard',
    PERMISSION_LABEL_DASHBOARD_CATEGORIES_SUBCATEGORIES: 'Dashboard Categories/Subcategories',
    PERMISSION_LABEL_CAN_CREATE_CATEGORY: 'Can create new category?',
    PERMISSION_LABEL_CAN_DELETE_CATEGORY: 'Can delete category?',
    PERMISSION_LABEL_PREVENT_REPORT_SHARING: 'Prevent Report Sharing Based on Category Accessibility',
    // PERMISSION DATA SETUP
    PERMISSION_LABEL_ADVANCED_SETTING: 'Advanced Settings',
    // PERMISSION EXPORTING
    PERMISSION_LABEL_EXPORTING_FORMAT: 'Exporting Format',
    PERMISSION_LABEL_QUERY_EXECUTION: 'Query Execution',
    PERMISSION_LABEL_DEFINITION: 'Definition',
    PERMISSION_LABEL_IFRAME: 'I-Frame',

    // PERMISSION REPORT FOOTER
    PERMISSION_LABEL_FILTER_LOGIC: 'Filter Logic',
    PERMISSION_LABEL_CROSS_FILTERING: 'Cross Filtering',
    PERMISSION_LABEL_SUBREPORT: 'Subreport',
    PERMISSION_LABEL_REGISTER_TO_ALERTS: 'Register to alerts',
    PERMISSION_LABEL_VIEW_REPORT_HISTORY: 'View Report History',
    PERMISSION_LABEL_UNARCHIVE_REPORT_VERSIONS: 'Unarchive Report Versions',
    PERMISSION_LABEL_HIDE_SUBREPORTS_IN_REPORTS_LIST: 'Hide Subreports in Report List',
    PERMISSION_LABEL_OVERWRITE_EXISTING_REPORT: 'Overwrite Existing Report',
    // PERMISSION REPORT HEADER
    PERMISSION_LABEL_CAN_USE_RD20: 'Report Designer 2.0',
    PERMISSION_LABEL_CAN_CREATE_REPORT: 'Can create new report?',
    PERMISSION_LABEL_SHOW_EXPLORE_MENU: 'Show Explore Menu',
    PERMISSION_LABEL_DATA_SOURCES: 'Data Sources',
    PERMISSION_LABEL_SIMPLE_DATA_SOURCES: 'Simple Data Sources',
    PERMISSION_LABEL_ADVANCED_DATA_SOURCES: 'Advanced Data Sources',
    PERMISSION_LABEL_TEMPLATE_REPORT_PARTS: 'Template Report Parts',
    PERMISSION_LABEL_CREATE: 'Create',
    PERMISSION_LABEL_VIEW: 'View',
    PERMISSION_LABEL_REPORT_PART_TYPES: 'Report Part Types',
    PERMISSION_LABEL_CHART: 'Chart',
    PERMISSION_LABEL_FORM: 'Form',
    PERMISSION_LABEL_GAUGE: 'Gauge',
    PERMISSION_LABEL_MAP: 'Map',
    PERMISSION_LABEL_KPI: 'KPI',
    PERMISSION_LABEL_ENABLE_GOOGLE_ADDRESS: 'Enable Google Address?',
    PERMISSION_LABEL_REPORT_CATEGORIES_SUBCATEGORIES: 'Report Categories/Subcategories',
    // PERMISSION ROLE SETUP
    PERMISSION_LABEL_DATA_MODEL_ACCESS: 'Data Model Access',
    PERMISSION_LABEL_PERMISSIONS: 'Permissions',
    PERMISSION_LABEL_GRANT_ROLE_WITH_FULL_REPORT_AND_DASHBOARD_ACCESS:
      'Grant Role with Full Report and Dashboard Access',
    PERMISSION_ROLE_SETUP_CONFIGURE_CALCULATED_FIELDS_TOOLTIP_INFO: 'Permission is for RD 2.0 & will not impact existing reports',
    // PERMISSION SCHEDULING
    PERMISSION_LABEL_SCHEDULING_LIMITS: 'Scheduling Limits',
    PERMISSION_LABEL_SCHEDULING_SCOPE: 'Scheduling Scope',
    PERMISSION_LABEL_SYSTEM_USERS: 'System Users',
    PERMISSION_LABEL_EXTERNAL_USERS: 'External Users',
    // PERMISSION SYSTEM CONFIGURATION
    PERMISSION_LABEL_FULLREPORTDASHBOARDACCESS: 'Full Report and Dashboard Access',
    PERMISSION_ICON_TOOLTIP_FULLREPORTDASHBOARDACCESS:
      'If this checkbox is checked, all settings of Reports, Dashboards, Access, Scheduling, Emailing, Exporting will be inherited from its tenant',
    PERMISSION_LABEL_SCHEDULED_INSTANCES: 'Scheduled Instances',
    // PERMISSION SYSTEM-WIDE
    PERMISSION_LABEL_CAN_SEE_SYSTEM_MESSAGES: 'Can see system messages?',
    // PERMISSION USER SETUP
    PERMISSION_LABEL_USER_ROLE_ASSOCIATION: 'User Role Association',
    PERMISSION_LABEL_PASSWORD_OPTIONS: 'Configure Password Option',

    // ACCESS CONSTANT
    ACCESS_CONSTANT_ACCESS_TABLE_DEF_SHARE_WITH: 'Share With',
    ACCESS_CONSTANT_ACCESS_TABLE_DEF_ACCESS_RIGHT: 'Access Rights',
    ACCESS_CONSTANT_PERMISSION_ACCESS_TABLE_DEF_SHARE_WITH: 'Share With',
    ACCESS_CONSTANT_PERMISSION_ACCESS_TABLE_DEF_SHARING_SELECTION: 'Sharing selection',
    ACCESS_CONSTANT_PERMISSION_ACCESS_TABLE_DEF_REPORT_ACCESS_RIGHT: 'Report Access Rights',
    ACCESS_CONSTANT_PERMISSION_ACCESS_TABLE_DEF_DASHBOARD_ACCESS_RIGHT: 'Dashboard Access Rights',
    ACCESS_CONSTANT_LABEL_SEARCH_OPTION_SHARE_WITH: 'Share With',
    ACCESS_CONSTANT_LABEL_SEARCH_OPTION_ACCESS_RIGHT: 'Access Rights',
    ACCESS_CONSTANT_LABEL_PERMISSION_SEARCH_OPTION_SHARE_WITH: 'Share With',
    ACCESS_CONSTANT_LABEL_PERMISSION_SEARCH_OPTION_REPORT_ACCESS_RIGHT: 'Report Access Rights',
    ACCESS_CONSTANT_LABEL_PERMISSION_SEARCH_OPTION_DASHBOARD_ACCESS_RIGHT: 'Dashboard Access Rights',
    ACCESS_CONSTANT_LABEL_ASSIGNED_TYPE_EVERYONE: 'Everyone',
    ACCESS_CONSTANT_LABEL_ASSIGNED_TYPE_USER: 'User',
    ACCESS_CONSTANT_CONSTRAINT_ACCESS_RIGHT: 'Access Right is required',
    ACCESS_CONSTANT_CONSTRAINT_USER: 'User is required',
    ACCESS_CONSTANT_CONSTRAINT_ROLE: 'Role is required',
    ACCESS_CONSTANT_CONSTRAINT_TENANT: 'Tenant or Tenant Group is required',
    ACCESS_CONSTANT_CONSTRAINT_REPORT_OWNER: 'Missing owner info. Please specify who will be the owner of this report.',
    ACCESS_CONSTANT_CONSTRAINT_DASHBOARD_OWNER:
      'Missing owner info. Please specify who will be the owner of this dashboard.',
    ACCESS_CONSTANT_MESSAGE_CONFIRM_DELETE_SHARED_INSTANCE: 'Are you sure you want to delete the shared instance?',
    ACCESS_CONSTANT_MESSAGE_CONFIRM_DELETE_SELECTED_SHARED_INSTANCES:
      'Are you sure you want to delete the selected shared instance(s)?',
    ACCESS_CONSTANT_MESSAGE_CONFIRM_DELETE_DEFAULT_ACCESS_RIGHT:
      'Are you sure you want to delete this default access right?',
    ACCESS_CONSTANT_MESSAGE_CONFIRM_DELETE_SELECTED_DEFAULT_ACCESS_RIGHT:
      'Are you sure you want to delete the selected default access rights?',
    ACCESS_CONSTANT_LABEL_ADD_SHARING: 'Add Sharing',
    ACCESS_CONSTANT_LABEL_ADD_DEFAULT_ACCESS: 'Add Access Default',
    ACCESS_CONSTANT_LABEL_ASSIGNED_TYPE_CATEGORY: 'Category',
    ACCESS_CONSTANT_CONSTRAINT_CATEGORY: 'Category is required.',

    DASHBOARD_CONSTANT_MESSAGE_REMOVE_USERS:
      'You are selecting the Global Dashboard checkbox. Any sharing with users will be removed in Access page and all schedules will be removed. Are you sure you want to select this checkbox?',
    DASHBOARD_CONSTANT_MESSAGE_REMOVE_ROLES:
      'You are unselecting the Global Dashboard checkbox. Any roles which do not exist in the related tenant will be removed in Sharing With Roles in Access page. Are you sure you want to unselect this checkbox?',
    // UI Constants
    UI_CONSTANT_PIXEL: 'Pixel',
    UI_CONSTANT_PIXELS: 'Pixels',
    UI_CONSTANT_CHARACTERS: 'Characters',

    // FONT SETTINGS POPUP
    FONT_SETTINGS_LABEL_FONT: 'Font',
    FONT_SETTINGS_LABEL_ALIGNMENT: 'Alignment',
    FONT_SETTINGS_LABEL_VERTICAL_ALIGNMENT: 'Vertical Alignment',

    // ROLE_SETUP_CONSTANT
    ROLE_SETUP_CONSTANT_MESSAGE_DELETE:
      'Deleting this role will remove the role association info of those users who are currently associated to this role. This might leave some users without an associated role if this is their only role. Are you sure you want to delete this role?',
    ROLE_SETUP_CONSTANT_MESSAGE_DEACTIVE:
      'Deactivating this role will leave any users associated to only this role unable to login to the system. Are you sure you want to make this change?',
    ROLE_SETUP_CONSTANT_CONSTRAINTS_REQUIRE_VALUE: 'A specific value is required.',
    ROLE_SETUP_CONSTANT_ROLE_SETUP_USERS: 'Select the users to assign to this role',
    ROLE_SETUP_CONSTANT_DATA_MODEL_ACCESS_TREE_HEADER: 'Data Sources',

    // ROLE_SETUP_PERMISSION_ERROR
    ROLE_SETUP_PERMISSION_CATEGORIES_ERROR_HEADER:
      'The {0}(s) saved in the following categories/subcategories may no longer be {1} due to these changes in categories/subcategories permissions.',
    ROLE_SETUP_PERMISSION_CATEGORIES_ERROR_FOOTER: 'Please correct this before moving forward.',
    ROLE_SETUP_PERMISSION_CATEGORIES_ERROR_EDITABLE: 'editable',
    ROLE_SETUP_PERMISSION_CATEGORIES_ERROR_ACCESSIBLE: 'accessible',
    ROLE_SETUP_PERMISSION_NOT_ALLOW_TO_SAVE:
      'The role is not allowed to save {0} into the following global categories/subcategories.<br><br>{1}',

    // ROLE_SETUP_ROLE_LIST_HEADER
    ROLE_SETUP_ROLE_LIST_HEADER_ADD_ROLE: 'Add Role',
    ROLE_SETUP_DATA_MODEL_ACCESS: 'Data Model Access',
    ROLE_SETUP_DATA_MODEL_HEADER: 'You can select the item or group to add to Data Model Access of selected role',
    ROLE_SETUP_USERS: 'Users',
    ROLE_SETUP_PERMISSION_SUMMARY: 'Permission Summary',
    ROLE_SETUP_ALL_ROLES: 'All Roles',
    ROLE_SETUP_LABEL_ROLES: 'Roles',

    // ROLE_SETUP_PERMISSION_SUMMARY
    ROLE_SETUP_PERMISSION_SUMMARY_HEADER_NAME_ACCESS: 'Access',
    ROLE_SETUP_PERMISSION_SUMMARY_ACCESS_LIMITS: 'Access Limits',
    ROLE_SETUP_PERMISSION_SUMMARY_ACCESS_DEFAULT: 'Access Defaults',
    ROLE_SETUP_PERMISSION_SUMMARY_LABEL_PREVENT_REPORT_SHARING: 'Prevent Report Sharing Based on Category Accessibility',
    ROLE_SETUP_PERMISSION_SUMMARY_LABEL_DASHBOARD_CATEGORIES_SUBCATEGORIES: 'Dashboard Categories/Subcategories',
    ROLE_SETUP_PERMISSION_SUMMARY_LABEL_ACCESSIBILITY: 'Category Accessibility',
    ROLE_SETUP_PERMISSION_SUMMARY_LABEL_VISIBLE_CATEGORIES: 'Visible Categories',
    ROLE_SETUP_PERMISSION_SUMMARY_LABEL_CATEGORIES_ALLOWED_FOR_SAVING_DASHBOARD:
      'Categories allowed for saving dashboards',
    ROLE_SETUP_PERMISSION_SUMMARY_LABEL_CONFIGURE_ACCESS: 'Configure access',
    ROLE_SETUP_PERMISSION_SUMMARY_LABEL_OVERWRITE_EXISTING_DASHBOARD: 'Overwrite existing dashboard',
    ROLE_SETUP_PERMISSION_SUMMARY_LABEL_DATA_MODEL: 'Data Model',
    ROLE_SETUP_PERMISSION_SUMMARY_LABEL_CUSTOM_VIEW: 'Custom View',
    ROLE_SETUP_PERMISSION_SUMMARY_LABEL_ADVANCED_SETTING: 'Advanced Setting',
    ROLE_SETUP_PERMISSION_SUMMARY_LABEL_CATEGORIES: 'Categories',
    ROLE_SETUP_PERMISSION_SUMMARY_LABEL_PERMISSION: 'PERMISSIONS',
    ROLE_SETUP_PERMISSION_SUMMARY_LABEL_ROLES: 'ROLES',
    ROLE_SETUP_PERMISSION_SUMMARY_LABEL_FULL_REPORT_AND_DASHBOARD_ACCESS: 'Full Report and Dashboard Access',
    ROLE_SETUP_PERMISSION_SUMMARY_LABEL_WORD: 'Word',
    ROLE_SETUP_PERMISSION_SUMMARY_LABEL_EXCEL: 'Excel',
    ROLE_SETUP_PERMISSION_SUMMARY_LABEL_PDF: 'PDF',
    ROLE_SETUP_PERMISSION_SUMMARY_LABEL_CSV: 'CSV',
    ROLE_SETUP_PERMISSION_SUMMARY_LABEL_XML: 'XML',
    ROLE_SETUP_PERMISSION_SUMMARY_LABEL_JSON: 'JSON',
    ROLE_SETUP_PERMISSION_SUMMARY_LABEL_QUERY_EXECUTION: 'Query Execution',
    ROLE_SETUP_PERMISSION_SUMMARY_REPORTS_CAN_CREATE_NEW_REPORTS: 'Can create new reports?',
    ROLE_SETUP_PERMISSION_SUMMARY_REPORTS_CAN_USE_RD20: 'Report Designer 2.0',
    ROLE_SETUP_PERMISSION_SUMMARY_REPORTS_CAN_CREATE_NEW_CATEGORY: 'Can create new category?',
    ROLE_SETUP_PERMISSION_SUMMARY_REPORTS_CAN_DELETE_CATEGORY: 'Can delete category?',
    ROLE_SETUP_PERMISSION_SUMMARY_REPORTS_SHOW_EXPLORE_MENU: 'Show Explore Menu',
    ROLE_SETUP_PERMISSION_SUMMARY_REPORTS_DATA_SOURCES: 'Data Sources',
    ROLE_SETUP_PERMISSION_SUMMARY_REPORTS_LABEL_SIMPLE_DATA_SOURCE: 'Simple Data Sources',
    ROLE_SETUP_PERMISSION_SUMMARY_REPORTS_LABEL_ADVANCED_DATA_SOURCE: 'Advanced Data Sources',
    ROLE_SETUP_PERMISSION_SUMMARY_REPORTS_LABEL_TEMPLATE_REPORT_PARTS: 'Template Report Parts',
    ROLE_SETUP_PERMISSION_SUMMARY_REPORTS_LABEL_CREATE: 'Create',
    ROLE_SETUP_PERMISSION_SUMMARY_REPORTS_LABEL_VIEW: 'View',
    ROLE_SETUP_PERMISSION_SUMMARY_REPORTS_LABEL_REPORT_PART_TYPES: 'Report Part Types',
    ROLE_SETUP_PERMISSION_SUMMARY_REPORTS_LABEL_CHART: 'Chart',
    ROLE_SETUP_PERMISSION_SUMMARY_REPORTS_LABEL_FORM: 'Form',
    ROLE_SETUP_PERMISSION_SUMMARY_REPORTS_LABEL_GAUGE: 'Gauge',
    ROLE_SETUP_PERMISSION_SUMMARY_REPORTS_LABEL_MAP: 'Map',
    ROLE_SETUP_PERMISSION_SUMMARY_REPORTS_LABEL_REPORT_CATEGORIES_SUBCATEGORIES: 'Report Categories/Sub Categories',
    ROLE_SETUP_PERMISSION_SUMMARY_REPORTS_LABEL_CATEGORIES_ACCESSIBILITY: 'Categories Accessibility',
    ROLE_SETUP_PERMISSION_SUMMARY_REPORTS_LABEL_VISIBLE_CATEGORIES: 'Visible Categories',
    ROLE_SETUP_PERMISSION_SUMMARY_REPORTS_LABEL_CATEGORIES_ALLOWED_FOR_SAVING_REPORTS:
      'Categories allowed for saving reports',
    ROLE_SETUP_PERMISSION_SUMMARY_REPORTS_LABEL_FILTERS_PROPERTIES: 'Filters Properties',
    ROLE_SETUP_PERMISSION_SUMMARY_REPORTS_LABEL_FILTERS_LOGIC: 'Filters Logic',
    ROLE_SETUP_PERMISSION_SUMMARY_REPORTS_LABEL_CROSS_FILTERING: 'Cross Filtering',
    ROLE_SETUP_PERMISSION_SUMMARY_REPORTS_LABEL_FIELD_PROPERTIES: 'Field Properties',
    ROLE_SETUP_PERMISSION_SUMMARY_REPORTS_LABEL_SUBREPORT: 'Subreport',
    ROLE_SETUP_PERMISSION_SUMMARY_REPORTS_LABEL_REGISTER_FOR_ALERTS: 'Register for Alerts',
    ROLE_SETUP_PERMISSION_SUMMARY_REPORTS_LABEL_CONFIGURE_ACCESS_RIGHT: 'Configure Access Rights',
    ROLE_SETUP_PERMISSION_SUMMARY_REPORTS_LABEL_VIEW_REPORT_HISTORY: 'View Report History',
    ROLE_SETUP_PERMISSION_SUMMARY_REPORTS_LABEL_UNARCHIVE_REPORT_VERSIONS: 'Unarchive Report Versions',
    ROLE_SETUP_PERMISSION_SUMMARY_REPORTS_LABEL_OVERWRITE_EXISTING_REPORT: 'Overwrite Existing Report',
    ROLE_SETUP_PERMISSION_SUMMARY_ROLE_SETUP_LABEL_DATA_MODEL_ACCESS: 'Data Model Acess',
    ROLE_SETUP_PERMISSION_SUMMARY_ROLE_SETUP_LABEL_PERMISSIONS: 'Permissions',
    ROLE_SETUP_PERMISSION_SUMMARY_ROLE_SETUP_LABEL_GRANT_ROLE_WITH_FULL_REPORT_AND_DASHBOARD_ACCESS:
      'Grant Role With Full Report and Dashboard Access',
    ROLE_SETUP_PERMISSION_SUMMARY_SCHEDULING_LABEL_SCHEDULING_LIMITS: 'Scheduling Limits',
    ROLE_SETUP_PERMISSION_SUMMARY_SCHEDULING_LABEL_SCHEDULING_SCOPE: 'Scheduling Scope',
    ROLE_SETUP_PERMISSION_SUMMARY_SCHEDULING_LABEL_SYSTEM_USERS: 'System Users',
    ROLE_SETUP_PERMISSION_SUMMARY_SCHEDULING_LABEL_EXTERNAL_USERS: 'External Users',
    ROLE_SETUP_PERMISSION_SUMMARY_SYSTEM_CONFIGURATION_LABEL_SCHEDULE_INSTANCES: 'Schedule Instances',
    ROLE_SETUP_PERMISSION_SUMMARY_SYSTEM_WIDE_LABEL_CAN_SEE_SYSTEM_MESSAGES: 'Can see system messages?',
    ROLE_SETUP_PERMISSION_SUMMARY_USER_SETUP_LABEL_CONFIGURE_SECURITY_OPTIONS: 'Configure Security Options',
    ROLE_SETUP_PERMISSION_SUMMARY_USER_SETUP_LABEL_USER_ROLE_ASSOCIATION: 'User Role Association',
    ROLE_SETUP_PERMISSION_SUMMARY_ROLE_CATEGORY_SUBCATEGORY_REPORT_VIEW:
      'This role is allowed to view reports into the following categories/subcategories:',
    ROLE_SETUP_PERMISSION_SUMMARY_ROLE_CATEGORY_SUBCATEGORY_REPORT_SAVE:
      'This role is allowed to save reports into the following categories/subcategories:',
    ROLE_SETUP_PERMISSION_SUMMARY_ROLE_CATEGORY_SUBCATEGORY_DASHBOARD_VIEW:
      'This role is allowed to view dashboards into the following categories/subcategories:',
    ROLE_SETUP_PERMISSION_SUMMARY_ROLE_CATEGORY_SUBCATEGORY_DASHBOARD_SAVE:
      'This role is allowed to save dashboards into the following categories/subcategories:',
    ROLE_SETUP_PERMISSION_SUMMARY_ROLE_CATEGORY_SUBCATEGORY_ACCESS_LIMIT:
      'This role is allowed to share reports/dashboards into the following categories/subcategories:',
    ROLE_SETUP_PERMISSION_SUMMARY_ROLE_CATEGORY_SUBCATEGORY_ACCESS_DEFAULT:
      'Below are the predefined sharing rights for this role when save any report or dashboard\nThese sharing rights can be changed by the user if they have permission to configure access rights in reports and dashboards',
    ROLE_SETUP_PERMISSION_SUMMARY_ROLE_CATEGORY_SUBCATEGORY_SCHEDULE_LIMIT:
      'This role is allowed to schedule reports/dashboards into the following categories/subcategories:',
    ROLE_SETUP_PERMISSION_SUMMARY_GLOBAL_CATEGORIES: 'Global Categories',
    ROLE_SETUP_PERMISSION_SUMMARY_LOCAL_CATEGORIES: 'Local Categories',
    ROLE_SETUP_PERMISSION_SUMMARY_VISIBLE_REPORT_CATEGORIES: 'Visible Report Categories',
    ROLE_SETUP_PERMISSION_SUMMARY_VISIBLE_DASHBOARD_CATEGORIES: 'Visible Dashboard Categories',
    ROLE_SETUP_PERMISSION_SUMMARY_SAVING_REPORT_CATEGORIES: 'Saving Report Categories',
    ROLE_SETUP_PERMISSION_SUMMARY_SAVING_DASHBOARD_CATEGORIES: 'Saving Dashboard Categories',
    ROLE_SETUP_PERMISSION_SUMMARY_MORE: 'More',

    // ROLE_SETUP_USERS
    ROLE_SETUP_USERS_LABEL_AVAILABLE_USERS: 'Available Users',
    ROLE_SETUP_USERS_LABEL_SEARCH: 'Search...',
    ROLE_SETUP_USERS_LABEL_ASSIGN_USERS: 'Assigned Users',

    // ROLE_SETUP_ROLE_DETAIL
    ROLE_SETUP_ROLE_DETAIL_LABEL_ROLE_NAME: 'Role Name',
    ROLE_SETUP_ROLE_DETAIL_LABEL_ROLE_TYPE: 'Role Type',
    ROLE_SETUP_ROLE_DETAIL_LABEL_ROLE_TYPE_ADMINISTRATOR: 'Administrator',
    ROLE_SETUP_ROLE_DETAIL_LABEL_ROLE_TYPE_ADVREPORTCREATOR: 'Adv. Report Creator',
    ROLE_SETUP_ROLE_DETAIL_LABEL_ROLE_TYPE_BASICREPORTCREATOR: 'Basic Report Creator',
    ROLE_SETUP_ROLE_DETAIL_LABEL_ROLE_TYPE_REPORTVIEWER: 'Report Viewer',
    ROLE_SETUP_ROLE_DETAIL_LABEL_ROLE_TYPE_CUSTOM: 'Custom',

    // SETTING LEVEL
    SETTING_LEVEL_LABEL_SETTING_LEVEL: 'Setting Level',

    // TENANT_DETAIL_TAB
    TENANT_DETAIL_TAB_TENANT_ID: 'Tenant ID',

    // TENANT_LIST_HEADER
    TENANT_LIST_HEADER_ADD_TENANT: 'Add Tenant',

    // SYSTEM CONFIGURATION SCHEDULING REPORTING TYPE
    SYSTEM_CONFIGURATION_LABEL_REPORTING_TYPE: 'Reporting Type',
    SYSTEM_CONFIGURATION_PLACEHOLDER_REPORT_OR_DASHBOARD_NAME: 'Report/Dashboard Name',

    // SECURITY RULES
    SECURITY_RULES_LIST_TITLE_ROW_LEVEL_SECURITY: 'Row-Level Security',
    SECURITY_RULES_LIST_LABEL_ADD_RULES_SET: 'Add',
    SECURITY_RULES_LIST_TABLE_COLUMN_NAME: 'Name',
    SECURITY_RULES_LIST_TABLE_COLUMN_DESCRIPTION: 'Description',
    SECURITY_RULES_LIST_TEXT_NO_NAME: 'No name',
    SECURITY_RULES_LIST_TEXT_NO_DESCRIPTION: 'No description',
    SECURITY_RULES_LIST_TOOLTIP_EDIT_RULES_SET: 'Edit Rules Set',
    SECURITY_RULES_LIST_TOOLTIP_CLONE_RULES_SET: 'Clone Rules Set',
    SECURITY_RULES_LIST_TOOLTIP_DELETE_RULES_SET: 'Delete Rules Set',
    SECURITY_RULES_SET_LABEL_NAME: 'Name',
    SECURITY_RULES_SET_LABEL_DESCRIPTION: 'Description',
    SECURITY_RULES_SET_LABEL_ADD_RULE: 'Add Rule',
    SECURITY_RULES_SET_TABEL_COLUMN_USER_GROUP: 'User Group',
    SECURITY_RULES_SET_TABEL_COLUMN_USER_VALUES: 'User Group Values',
    SECURITY_RULES_SET_TABEL_COLUMN_ACCESSIBLE_VALUES: 'Values',
    SECURITY_RULES_SET_TABEL_COLUMN_ACCESS_MODE: 'Access Mode',
    SECURITY_RULES_SET_TOOLTIP_CLONE_RULE: 'Clone Rule',
    SECURITY_RULES_SET_TOOLTIP_DELETE_RULE: 'Delete Rule',
    SECURITY_RULES_POPUP_TITLE_FIRST_STEP: 'Step 1: Choose Data Sources',
    SECURITY_RULES_POPUP_TITLE_SECOND_STEP: 'Step 2: Choose Fields',
    SECURITY_RULES_POPUP_TITLE_THIRD_STEP: 'Step 3: Configure Rules',
    SECURITY_RULES_MESSAGE_DATA_SOURCES_NOT_SELECTED: 'Please choose at least one data source.',
    SECURITY_RULES_MESSAGE_FIELDS_NOT_SELECTED: 'Please choose at least one field.',
    SECURITY_RULES_MESSAGE_RULES_NOT_CREATED: 'Please add at least one rule.',
    SECURITY_RULES_MESSAGE_CONFIRM_SAVING: 'Applying these rules will impact how data can be exported, do you want to proceed?',

    // SCHEDULING SEARCH CONSTANT
    SCHEDULING_SEARCH_CONSTANT_TOOLTIP_EXPAND: 'Expand',
    SCHEDULING_SEARCH_CONSTANT_TOOLTIP_COLLAPSE: 'Collapse',
    SCHEDULING_SEARCH_CONSTANT_LABEL_INSTANCE_TYPE_SCHEDULE_REPORT: 'Scheduled Reporting Item',
    SCHEDULING_SEARCH_CONSTANT_LABEL_INSTANCE_TYPE_SCHEDULE_ALERT: 'Scheduled Alert',
    SCHEDULING_SEARCH_CONSTANT_LABEL_INSTANCE_TYPE_SUBSCRIBE_REPORT: 'Subscribed Reporting Item',
    SCHEDULING_SEARCH_CONSTANT_LABEL_INSTANCE_TYPE_SUBSCRIBE_ALERT: 'Subscribed Alert',
    SCHEDULING_SEARCH_CONSTANT_LABEL_RECURRENCE_EVERY_HOURLY: 'Every Hourly',
    SCHEDULING_SEARCH_CONSTANT_LABEL_RECURRENCE_EVERY_DAILY: 'Every Daily',
    SCHEDULING_SEARCH_CONSTANT_LABEL_RECURRENCE_CUSTOM: 'Custom',
    SCHEDULING_SEARCH_CONSTANT_LABEL_DELIVERY_TYPE_FILE_LOCATION: 'File Location',
    SCHEDULING_SEARCH_CONSTANT_LABEL_DELIVERY_METHOD_SEND_TO_DISK: 'Send to Disk',
    SCHEDULING_SEARCH_CONSTANT_LABEL_DATE: 'Date',
    SCHEDULING_SEARCH_CONSTANT_LABEL_LAST_SUCCESS_RUN_CANNOT_BE_SEND: 'The report cannot be sent',
    SCHEDULING_SEARCH_CONSTANT_LABEL_LAST_SUCCESS_RUN_NOT_STARTED: 'The schedule has not started',
    SCHEDULING_SEARCH_CONSTANT_LABEL_NEXT_SCHEDULED_RUN_NO_RECURRENCE: 'No recurrence',
    SCHEDULING_SEARCH_CONSTANT_LABEL_NEXT_SCHEDULED_RUN_ENDED: 'The Schedule has ended',
    SCHEDULING_SEARCH_CONSTANT_LABEL_REPORT_TYPE: 'Report Type',
    SCHEDULING_SEARCH_CONSTANT_LABEL_REPORTING_NAME: 'Reporting Name',
    SCHEDULING_SEARCH_CONSTANT_LABEL_INSTANCE_TYPE: 'Instance Type',
    SCHEDULING_SEARCH_CONSTANT_LABEL_RECURRENCE: 'Recurrence',
    SCHEDULING_SEARCH_CONSTANT_LABEL_EXPORT_FILE_TYPE: 'Export File Type',
    SCHEDULING_SEARCH_CONSTANT_LABEL_RECIPENT: 'Recipient(s)',
    SCHEDULING_SEARCH_CONSTANT_LABEL_LAST_SUCCESS_RUN: 'Last Successful Run',
    SCHEDULING_SEARCH_CONSTANT_LABEL_NEXT_SCHEDULED_RUN: 'Next Scheduled Run',
    SCHEDULING_SEARCH_CONSTANT_LABEL_CREATED_BY: 'Created By',
    SCHEDULING_SEARCH_CONSTANT_ACTION_EDIT_TEXT: 'Edit Scheduling Instance',
    SCHEDULING_SEARCH_CONSTANT_ACTION_DELETE_TEXT: 'Delete Scheduling Instance',
    // CACHE CONSTANT
    DATA_CACHING_CONFIGURATION_LABEL: 'Data Cache Configuration',
    DATA_CACHING_ENABLE_DATA_CACHE: 'Enable Data Cache',
    DATA_CACHING_TTL: 'Time To Live',
    DATA_CACHING_TTL_TOOLTIP:
      'Define the lifespan in seconds for each cache. If any cache has expired, it will be removed from the storage.',
    DATA_CACHING_EVICTION_INTERVAL: 'Eviction Interval',
    DATA_CACHING_EVICTION_INTERVAL_TOOLTIP: 'Define the interval to remove expired caches.',
    DATA_CACHING_REFRESH_INTERVAL: 'Refresh Interval',
    DATA_CACHING_REFRESH_INTERVAL_TOOLTIP: 'Define the interval to load new data for data caches.',
    DATA_CACHING_REFRESH_DURATION: 'Refresh Duration',
    DATA_CACHING_REFRESH_DURATION_TOOLTIP: 'Limit the time to run refresh data cache job.',
    CACHING_TIME_UNIT: '(s)',
    SYSTEM_CACHING_CONFIGURATION_LABEL: 'System Cache Configuration',
    SYSTEM_CACHING_ENABLE_SYSTEM_CACHE: 'Enable System Cache',
    SYSTEM_CACHING_TTL: 'Time To Live',
    SYSTEM_CACHING_TTL_TOOLTIP:
      'Define the lifespan in seconds for each cache. If any cache has expired, it will be removed from the storage.',
    SYSTEM_CACHING_EVICTION_INTERVAL: 'Eviction Interval',
    SYSTEM_CACHING_EVICTION_INTERVAL_TOOLTIP: 'Define the interval to remove expired caches.',
    // GOOGLE MAP
    GOOGLE_MAP_USE_SYSTEM_CONFIGURATION: 'Use System Configuration',
    GOOGLE_MAP_USE_CUSTOM_CONFIGURATION: 'Use Custom Configuration',
    GOOGLE_MAP_API_KEY: 'Google API Key',
    SYSTEM_CONFIGURATION_GOOGLE_MAP_ADDRESS: 'Google Address',
    SYSTEM_CONFIGURATION_GOOGLE_MAP_ADDRESS_TOOLTIP:
      'Enables/Disables the use of the Google API key for Geocoding services.',
    // DASHBOARD
    DASHBOARD_TOOLTIP_REQUIRED_FILTER:
      'This filter is required in at least one report. Please input a filter value to make sure all tile(s) can be loaded successfully.',
    DASHBOARD_MESSAGE_CONFIRM_DELETE: 'Are you sure you want to delete "{0}" dashboard?',
    DASHBOARD_MESSAGE_MOVE_SUCCESSFULLY: 'The dashboard "{0}" was successfully moved to {1}{2}.',
    DASHBOARD_MESSAGE_COPY_SUCCESSFULLY: 'The dashboard "{0}" was successfully copied to {1}{2}.',
    DASHBOARD_MESSAGE_SPECIFY_DESTINATION: 'Specify the destination info to {0} the dashboard.',
    DASHBOARD_MESSAGE_INVALID_IMAGE_URL: 'The image URL cannot be publicly accessed in internet.',
    DASHBOARD_MESSAGE_MISSING_DESCRIPTION: 'Provide description for your dashboard here:',
    DASHBOARD_COMMON_FILTER_FIELDS: 'Common Filter Fields',
    DASHBOARD_DEFAULT_NAME: 'Example Dashboard Name',
    DASHBOARD_CONSTRAINTS_REQUIRED_NAME: 'Dashboard Name is required.',
    DASHBOARD_LABEL_PRESENTATION: 'Presentation',
    DASHBOARD_LABEL_ACCESS: 'Access',
    DASHBOARD_LABEL_NAME: 'Dashboard Name',
    DASHBOARD_LABEL_ALL_DASHBOARD: 'ALL DASHBOARDS',
    DASHBOARD_LABEL_BODY_TEXT: 'Body Text',
    DASHBOARD_LABEL_DASHBOARD_DESCRIPTION: 'Dashboard Description',
    DASHBOARD_LABEL_IMAGE_URL: 'Image URL',
    DASHBOARD_LABEL_STRETCH_IMAGE: 'Stretch image?',
    DASHBOARD_LABEL_BACKGROUND_IMAGE: 'Background Image Settings',
    DASHBOARD_MESSAGE_CREATE_DASHBOARD_TILE: 'To create a dashboard tile',
    DASHBOARD_LABEL_SELECT_A_TYPE: 'Select a Type:',
    DASHBOARD_TITLE_EDIT_REPORT_PART_NAME: 'Edit Report Part Name',
    DASHBOARD_TITLE_SET_NEW_DASHBOARD_PART_NAME: 'Set New Dashboard Part Name',
    DASHBOARD_TITLE_REVERT_DASHBOARD_PART_NAME: 'Revert Dashboard Part Name',
    DASHBOARD_LABEL_NUMBER_OF_RECORDS: 'Number of Records',
    DASHBOARD_LABEL_FILTER_DESCRIPTIONS: 'Filter Descriptions:',
    DASHBOARD_LABEL_TITLE_SETTINGS: 'Title Settings',
    DASHBOARD_LABEL_DESCRIPTION_SETTINGS: 'Description Settings',
    DASHBOARD_LABEL_REPORT_SELECTION: 'Report Selection',
    DASHBOARD_LABEL_REPORT_PART_SELECTION: 'Report Part Selection',
    DASHBOARD_LABEL_CATEGORY: 'Category',
    DASHBOARD_LABEL_SUB_CATEGORY: 'Sub Category',
    DASHBOARD_LABEL_SEARCHING: 'Searching...',
    DASHBOARD_MESSAGE_SELECT_REPORT_THEN_SELECT_REPORT_PART:
      'Select a report, then select the report part you would like to display on your dashboard tile',
    DASHBOARD_TITLE_EXIT_FULL_SCREEN_MODE: 'Exit Full Screen Mode',
    DASHBOARD_LABEL_SHOW_NEXT_SLIDE_AFTER: 'Show Next Slide After',
    DASHBOARD_LABEL_FULLSCREEN_MODE: 'Fullscreen Mode',
    DASHBOARD_LABEL_EXIT_PRESENTATION_MODE: 'Exit Presentation Mode',
    DASHBOARD_LABEL_PRESENTATION_MODE: 'Presentation Mode',
    DASHBOARD_LABEL_SET_BACKGROUND_COLOR: 'Set Background Color',
    DASHBOARD_LABEL_SET_BACKGROUND_IMAGE: 'Set Background Image',
    DASHBOARD_MESSAGE_FILTER_DESCIPTIONS_ON_TILE: 'filter descriptions on tile',
    DASHBOARD_LABEL_ADD_DASHBOARD_TILE: 'Add Dashboard Tile',
    DASHBOARD_TITLE_FULL_SCREEN: 'Full screen',
    DASHBOARD_TITLE_NORMAL_SCREEN: 'Normal screen',
    DASHBOARD_LABEL_RECURRENCE_PATTERN: 'Recurrence Pattern',
    DASHBOARD_LABEL_RANGE_OF_RECURRENCE: 'Range of Recurrence',
    DASHBOARD_TOOLTIP_PREVIOUS_TILE: 'Previous Tile',
    DASHBOARD_TOOLTIP_NEXT_TILE: 'Next Tile',
    DASHBOARD_CONSTANTS_REPORT_MESSAGE_UNSELECTING_GLOBAL:
      'You are unselecting the Dashboard Report checkbox. Any roles which do not exist in the related tenant will be removed in Sharing With Roles in Access page. Are you sure you want to unselect this checkbox?',
    DASHBOARD_CONSTANTS_REPORT_MESSAGE_SELECTING_GLOBAL:
      'You are selecting the Global Dashboard checkbox. Any sharing with users will be removed in Access page and all schedules will be removed. Are you sure you want to select this checkbox?',
    INVALID_DASHBOARD_NAME: 'The dashboard name is invalid when contains ["/", "<", ">", "&"] characters.',
    DASHBOARD_CONSTANTS_REPORT_DRILL_DOWN_STATE_MAINTAIN: 'How would you like to export this dashboard?',
    DASHBOARD_CONSTANT_DRILL_DOWN_EXPORT_WITH_PREVIEW_STATE:
      'Export report with only those records as shown in preview?',
    DASHBOARD_CONSTANT_DRILL_DOWN_EXPORT_WITHOUT_PREVIEW_STATE: 'Export with all expanded records',

    // SECURITY_POLICIES_CONSTANT
    SECURITY_POLICIES_CONSTANT_ERROR_MIN_VALUE:
      'Min password length must be greater than or equal to the sum of all values specified in the fields: Min No. Special Characters, Min No. Uppercase Characters, Min No. Lowercase Characters, Min No. Numeric Characters.',
    SECURITY_POLICIES_CONSTANT_ERROR_MAX_VALUE:
      'Max password length must be greater than or equal to the sum of all values specified in the fields: Max No. Special Characters, Max No. Uppercase Characters, Max No. Lowercase Characters, Max No. Numeric Characters.',
    SECURITY_POLICIES_CONSTANT_MIN_PASSWORD_AGE: 'Min Password Age',
    SECURITY_POLICIES_CONSTANT_MAX_PASSWORD_AGE: 'Max Password Age',
    SECURITY_POLICIES_CONSTANT_USER_PROFILE: 'No. Security Questions per User Profile',
    SECURITY_POLICIES_CONSTANT_RESET_PASSWORD: 'No. Security Questions to Reset Password',
    SECURITY_POLICIES_CONSTANT_SECURITY_QUESTIONS:
      'Security questions are required to allow users to reset their own password. If security questions are not used, the users cannot reset forgotten passwords and will need to contact a system administrator for a new link to reset password.',
    SECURITY_POLICIES_CONSTANT_MUST_BE_SMALLER_THAN: '{0} must be smaller than {1}.',
    SECURITY_POLICIES_CONSTANT_MESSAGE_ERROR_SECURITY_QUESTION_RESET_PASSWORD:
      'The number of security questions to reset password must be smaller than or equal to the number of security questions per user profile.',

    // SYSTEM_CONFIGURATION_SECURITY_POLICIES
    SYSTEM_CONFIGURATION_SECURITY_POLICIES_LABEL_ACCOUNT_LOCKOUT_POLICIES: 'Account Lockout Policies',
    SYSTEM_CONFIGURATION_SECURITY_POLICIES_LABEL_FAILED_LOGON_ATTEMPTS_ALLOWED: 'No. failed logon attempts allowed',
    SYSTEM_CONFIGURATION_SECURITY_POLICIES_LABEL_FAILED_SECURITY_QUESTION_ATTEMPTS_ALLOWED:
      'No. failed security question attempts allowed',
    SYSTEM_CONFIGURATION_SECURITY_POLICIES_LABEL_LOCKOUT_PERIOD: 'Lockout Period',
    SYSTEM_CONFIGURATION_SECURITY_POLICIES_LABEL_PASSWORD_COMPLEXITY: 'Password Complexity',

    SYSTEM_CONFIGURATION_SECURITY_POLICIES_LABEL_MIN_PASSWORD_LENGTH: 'Min Password Length',
    SYSTEM_CONFIGURATION_SECURITY_POLICIES_LABEL_MAX_PASSWORD_LENGTH: 'Max Password Length',
    SYSTEM_CONFIGURATION_SECURITY_POLICIES_LABEL_PASSWORD_LENGTH: 'Password Length',
    SYSTEM_CONFIGURATION_SECURITY_POLICIES_LABEL_NO_OF_SPECIAL_CHARACTERS: 'No. Special Characters',
    SYSTEM_CONFIGURATION_SECURITY_POLICIES_LABEL_MIN_NO_OF_UPPERCASE_CHARACTERS: 'Min No. Uppercase Characters',
    SYSTEM_CONFIGURATION_SECURITY_POLICIES_LABEL_MAX_NO_OF_UPPERCASE_CHARACTERS: 'Max No. Uppercase Characters',
    SYSTEM_CONFIGURATION_SECURITY_POLICIES_LABEL_NO_OF_UPPERCASE_CHARACTERS: 'No. Uppercase Characters',
    SYSTEM_CONFIGURATION_SECURITY_POLICIES_LABEL_MIN_NO_OF_LOWERCASE_CHARACTERS: 'Min No. Lowercase Characters',
    SYSTEM_CONFIGURATION_SECURITY_POLICIES_LABEL_MAX_NO_OF_LOWERCASE_CHARACTERS: 'Max No. Lowercase Characters',
    SYSTEM_CONFIGURATION_SECURITY_POLICIES_LABEL_NO_OF_LOWERCASE_CHARACTERS: 'No. Lowercase Characters',
    SYSTEM_CONFIGURATION_SECURITY_POLICIES_LABEL_MIN_NO_OF_NUMBERIC_CHARACTERS: 'Min No. Numeric Characters',
    SYSTEM_CONFIGURATION_SECURITY_POLICIES_LABEL_MAX_NO_OF_NUMBERIC_CHARACTERS: 'Max No. Numeric Characters',
    SYSTEM_CONFIGURATION_SECURITY_POLICIES_LABEL_NO_OF_NUMBERIC_CHARACTERS: 'No. Numeric Characters',
    SYSTEM_CONFIGURATION_SECURITY_POLICIES_LABEL_MAX_NO_OF_REPEAT_CHARACTERS: 'Max No. Sequential Repeated Characters',
    SYSTEM_CONFIGURATION_SECURITY_POLICIES_LABEL_MIN_PASSWORD_AGE: 'Min Password Age',
    SYSTEM_CONFIGURATION_SECURITY_POLICIES_LABEL_PASSWORD_EXPIRY_NOTIFICATION: 'Password Expiry Notification',
    SYSTEM_CONFIGURATION_SECURITY_POLICIES_LABEL_NOTIFY_USER: 'Notify user?',
    SYSTEM_CONFIGURATION_SECURITY_POLICIES_LABEL_NOTIFY_USE_DURING: 'Notify user during',
    SYSTEM_CONFIGURATION_SECURITY_POLICIES_LABEL_DAYS_TO_PASSWORD_EXPIRY: 'days to password expiry',
    SYSTEM_CONFIGURATION_SECURITY_POLICIES_LABEL_PASSWORD_HISTORY: 'Password History',
    SYSTEM_CONFIGURATION_SECURITY_POLICIES_LABEL_ENFORCE_PASSWORD_HISTORY: 'Enforce Password History?',
    SYSTEM_CONFIGURATION_SECURITY_POLICIES_LABEL_NO_PASSWORD_TO_KEEP: 'No. passwords to keep',
    SYSTEM_CONFIGURATION_SECURITY_POLICIES_LABEL_PASSWORD_LINK: 'Password Link',
    SYSTEM_CONFIGURATION_SECURITY_POLICIES_LABEL_PASSWORD_LINK_VALIDITY: 'Password Link Validity',
    SYSTEM_CONFIGURATION_SECURITY_POLICIES_LABEL_PASSWORD_POLICY: 'Password Policies',
    SYSTEM_CONFIGURATION_SECURITY_POLICIES_LABEL_PASSWORD_VALIDITY: 'Password Validity',
    SYSTEM_CONFIGURATION_SECURITY_POLICIES_LABEL_PASSWORD_AGE: 'Password Age',
    SYSTEM_CONFIGURATION_SECURITY_POLICIES_LABEL_SECURITY_QUESTION: 'Security Questions',
    SYSTEM_CONFIGURATION_SECURITY_POLICIES_LABEL_USE_SECURITY_QUESTION: 'Use Security Questions?',
    SYSTEM_CONFIGURATION_SECURITY_POLICIES_LABEL_USER_POLICIES: 'User Policies',
    SYSTEM_CONFIGURATION_SECURITY_POLICIES_LABEL_USER_HIDE_ID: 'Hide User Id in Profile',
    SYSTEM_CONFIGURATION_SECURITY_POLICIES_LABEL_USER_HIDE_PROFILE: 'Hide User Profile',

    // SYSTEM_CONFIGURATION_REPORT
    SYSTEM_CONFIGURATION_REPORT_ALL_ARCHIVED_WILL_REMOVED:
      'All of archived versions of reports in the application will be removed.',
    SYSTEM_CONFIGURATION_REPORT_CONFIRM_AFTER_SAVING_SETTING:
      'After saving this setting, the oldest archived versions of some reports may be removed.',
    SYSTEM_CONFIGURATION_REPORT_SYSTEM_REMOVE_ALL_ARCHIVED: 'System will remove all archived versions of reports.',
    SYSTEM_CONFIGURATION_REPORT_ENFORCE_VERSION_HISTORY: 'Enforce Version History',
    SYSTEM_CONFIGURATION_REPORT_CLEAR_ARCHIVED_VERSIONS_NOW: 'Clear Archived Versions Now',
    SYSTEM_CONFIGURATION_REPORT_REMOVE_ARCHIVED_VERSIONS: 'Remove Archived Versions',
    SYSTEM_CONFIGURATION_REPORT_LABEL_VERSION: 'Version',
    SYSTEM_CONFIGURATION_REPORT_LABEL_VERSION_STORAGE: 'Version Storage',
    SYSTEM_CONFIGURATION_REPORT_LABEL_VERSION_HISTORY: 'Version History',
    SYSTEM_CONFIGURATION_REPORT_ARCHIVE_VERSION_TO_KEEPS: 'No. archived versions to keep',
    SYSTEM_CONFIGURATION_REPORT_DEFAULT_HEADER_IMAGE: 'Default Header Image',
    SYSTEM_CONFIGURATION_REPORT_GLOBAL_AND_LOCAL_NAMES: 'Global and Local Names',
    SYSTEM_CONFIGURATION_REPORT_RELATIVE_PATH_OR_URL: 'Relative Path or URL',
    SYSTEM_CONFIGURATION_REPORT_GLOBAL_NAME: 'Global Name',
    SYSTEM_CONFIGURATION_REPORT_LOCAL_NAME: 'Local Name',
    SYSTEM_CONFIGURATION_REPORT_GLOBAL_NAME_REQUIRED: 'Global Name is required.',
    SYSTEM_CONFIGURATION_REPORT_LOCAL_NAME_REQUIRED: 'Local Name is required.',
    SYSTEM_CONFIGURATION_REPORT_DUPLICATE_GLOBAL_LOCAL_NAME: 'Global Name and Local Name are not allowed to duplicate.',
    SYSTEM_CONFIGURATION_REPORT_DEFAULT_GLOBAL_NAME: 'Global Categories',
    SYSTEM_CONFIGURATION_REPORT_DEFAULT_LOCAL_NAME: 'Local Categories',
    SYSTEM_CONFIGURATION_REPORT_DEFAULT_COLOR_THEME_HEADER: 'Default Color Theme for Chart, Gauge, and Map',
    SYSTEM_CONFIGURATION_REPORT_DEFAULT_COLOR_THEME_INFO:
      'This setting changes the color palette of all charts, gauges, and maps for newly created reports.\nThe user can select a different theme to overwrite the set default.',

    // SYSTEM_CONFIGURATION_EXPORTING
    SYSTEM_CONFIGURATION_EXPORTING_LABEL_USE_SYSTEM_CONFIGURATION: 'Use System Configuration',
    SYSTEM_CONFIGURATION_EXPORTING_LABEL_USE_CUSTOM_CONFIGURATION: 'Use Custom Configuration',
    SYSTEM_CONFIGURATION_EXPORTING_TITLE_ASYNC_EXPORT_SERVICE: 'Exporting Service',
    SYSTEM_CONFIGURATION_EXPORTING_TITLE_ROUTINE_FILE_PROCESS: 'Routine File Process',
    SYSTEM_CONFIGURATION_EXPORTING_LABEL_EXPORT_SERVICE: 'Export Service',
    SYSTEM_CONFIGURATION_EXPORTING_LABEL_ASYNC_EXPORTING_INTERVAL: 'Async Exporting Interval',
    SYSTEM_CONFIGURATION_EXPORTING_LABEL_EXPORT_STORAGE_OPTION: 'Export Storage Option',
    SYSTEM_CONFIGURATION_EXPORTING_LABEL_AZURE_FILES_CONNECTION_STRING: 'Azure Files Service Connection String',
    SYSTEM_CONFIGURATION_EXPORTING_LABEL_FILE_REPOSITORY: 'File Repository',
    SYSTEM_CONFIGURATION_EXPORTING_LABEL_AWS_BUCKET_NAME: 'AWS Bucket Name',
    SYSTEM_CONFIGURATION_EXPORTING_LABEL_AWS_ACCESS_KEY: 'AWS Access Key',
    SYSTEM_CONFIGURATION_EXPORTING_LABEL_AWS_SECRET_KEY: 'AWS Secret Key',
    SYSTEM_CONFIGURATION_EXPORTING_LABEL_S3_BUCKET_REGION: 'S3 Bucket Region',
    SYSTEM_CONFIGURATION_EXPORTING_LABEL_SMART_EXPORTING: 'Enable Smart Exporting',
    SYSTEM_CONFIGURATION_EXPORTING_LABEL_ENCRYPTION: 'Enable Encryption',
    SYSTEM_CONFIGURATION_EXPORTING_LABEL_FILE_REFRESH: 'Export File Refresh',
    SYSTEM_CONFIGURATION_EXPORTING_LABEL_FILE_REFRESH_INTERVAL: 'Export File Refresh Job Interval',
    SYSTEM_CONFIGURATION_EXPORTING_CONSTRAINT_MESSAGE_TIME_INTERVAL: 'Time Interval can not be zero',
    SYSTEM_CONFIGURATION_EXPORTING_TIME_UNIT: '(m)',

    //EXPORT_MANAGER
    EXPORT_MANAGER_TITLE_MY_EXPORTS: 'My Exports',
    EXPORT_MANAGER_TABEL_DEF_COLUMN_TITLE_ID: 'ID',
    EXPORT_MANAGER_TABEL_DEF_COLUMN_TITLE_NAME: 'Name',
    EXPORT_MANAGER_TABEL_DEF_COLUMN_TITLE_FILE_TYPE: 'File Type',
    EXPORT_MANAGER_TABLE_DEF_COLUMN_LAYOUT: 'Layout Name',
    EXPORT_MANAGER_TABEL_DEF_COLUMN_TITLE_EXPORTED_DATE: 'Exported Date',
    EXPORT_MANAGER_TABEL_DEF_COLUMN_TITLE_REFRESHED_DATE: 'Refreshed Date',
    EXPORT_MANAGER_TABEL_DEF_COLUMN_TITLE_DOWNLOAD_FILE: 'Download File',
    EXPORT_MANAGER_TABEL_DEF_COLUMN_TITLE_STATUS: 'Status',
    EXPORT_MANAGER_TABEL_DEF_COLUMN_TITLE_DELETE: 'Delete',
    EXPORT_MANAGER_STATUS_PENDING: 'Pending',
    EXPORT_MANAGER_STATUS_COMPLETED: 'Completed',
    EXPORT_MANAGER_STATUS_FAILED: 'Failed',
    EXPORT_MANAGER_MESSAGE_DETAILS_WERE_SAVED: 'Details were saved.',
    EXPORT_MANAGER_MESSAGE_DETAILS_WERE_NOT_SAVED: 'Details were not saved. Please contact your System Administrator for assistance.',
    EXPORT_MANAGER_MESSAGE_CANCEL_IN_PROGRESS: '{0} export of "{1}" {2} is {3}. Do you want to cancel the exporting process?',
    EXPORT_MANAGER_MESSAGE_DELETE_COMPLETED: 'Are you sure you want to delete the exported {0}?',
    EXPORT_MANAGER_MESSAGE_DELETE_FAILED: 'Are you sure you want to delete the failed item?',
    EXPORT_MANAGER_MESSAGE_DELETE_DEFAULT: 'Are you sure you want to delete the item?',

    // ACCOUNT_CONSTANTS
    ACCOUNT_CONSTANTS_MESSAGE_INCORECT_CREDENTIALS: 'Incorrect credentials, please try again.',
    ACCOUNT_CONSTANTS_MESSAGE_RESET_PASSWORD_SUCCESSFULLY: 'Your password has been successfully created/reset.',
    ACCOUNT_CONSTANTS_MESSAGE_PASSOWRD_EXPIRED: 'Your password has expired.',
    ACCOUNT_CONSTANTS_MESSAGE_CONTACT_ADMIN: 'Please contact your System Administrator for assistance.',
    ACCOUNT_CONSTANTS_MESSAGE_PASSWORD_LINK_EXPIRED:
      'Your password link has expired. Please contact your System Administrator for assistance.',
    ACCOUNT_CONSTANTS_MESSAGE_USERID_REQUIRED: 'User ID is required.',
    ACCOUNT_CONSTANTS_MESSAGE_FIRST_NAME_REQUIRED: 'First Name is required.',
    ACCOUNT_CONSTANTS_MESSAGE_LAST_NAME_REQUIRED: 'Last Name is required.',
    ACCOUNT_CONSTANTS_MESSAGE_INVALID_EMAIL: 'Email must be a valid email.',
    ACCOUNT_CONSTANTS_MESSAGE_NEW_PASSWORD_REQUIRED: 'New Password is required.',
    ACCOUNT_CONSTANTS_MESSAGE_NEW_PASSWORD_CONFIRM: 'Confirm New Password is required.',
    ACCOUNT_CONSTANTS_MESSAGE_NEW_AND_CONFIRM_PASSOWRD_NOT_MATCHED:
      'The passwords in New Password and Confirm New Password do not match. Please try again.',
    ACCOUNT_CONSTANTS_MESSAGE_SECURITY_QUESTION_IS_REQUIRED: 'Security Question is required.',
    ACCOUNT_CONSTANTS_MESSAGE_SECURITY_ANSWER_IS_REQUIRED: 'Security Answer is required.',
    ACCOUNT_CONSTANTS_MESSAGE_PASSWORD_IS_REQUIRED: 'Password is required.',
    ACCOUNT_CONSTANTS_MESSAGE_CURRENT_PASSWORD_REQUIRED: 'Current Password is required.',
    ACCOUNT_CONSTANTS_MESSAGE_PASSWORD_EXPIRY: 'Your password will expire in the next {0} days.',

    // ADVANCED_SETTINGS_CONSTANTS
    ADVANCED_SETTINGS_CONSTANTS_LABEL_MENU_PERFORMANCE: 'Performance',
    ADVANCED_SETTINGS_CONSTANTS_LABEL_MENU_SECURITY: 'Security',
    ADVANCED_SETTINGS_CONSTANTS_LABEL_MENU_CATEGORY: 'Category',

    // DASHBOARD_GRID_CONSTANTS
    DASHBOARD_GRID_CONSTANTS_DELETE_CONFIRM_MESSAGE: 'Are you sure you want to delete {0} dashboard part?',
    DASHBOARD_GRID_CONSTANTS_DUPLICATE_MESSAGE: 'The Dashboard Part Name already exists',

    // DASHBOARD_PRESET_CONSTANT
    DASHBOARD_PRESET_CONSTANT_BLANK_DASHBOARD: 'Blank Dashboard',
    DASHBOARD_PRESET_CONSTANT_TWO_ROW_ONE_TITLE_PER_ROW: '2 rows (1 tile per row)',
    DASHBOARD_PRESET_CONSTANT_TWO_ROW_TWO_TITLES_ON_FIRST_ROW: '2 rows (2 tiles on first row, 1 tile on second row)',
    DASHBOARD_PRESET_CONSTANT_TWO_ROW_TWO_TITLES_PER_ROW: '2 rows (2 tiles per row)',
    DASHBOARD_PRESET_CONSTANT_TWO_ROW_THREE_TITLES_PER_ROW: '2 rows (3 tiles per row)',
    DASHBOARD_PRESET_CONSTANT_TWO_ROW_ONE_TITLE_FIRST_ROW: '2 rows (1 tile on first row, 2 tiles on second row)',
    DASHBOARD_PRESET_CONSTANT_THREE_ROW_ONE_TITLE_PER_ROW: '3 rows (1 tile per row)',
    DASHBOARD_PRESET_CONSTANT_THREE_ROW_TWO_TITLES_PER_ROW: '3 rows (2 tiles per row)',
    DASHBOARD_PRESET_CONSTANT_TWO_ROW_TWO_ON_FIRST_THREE_ON_SECOND:
      '2 rows (2 tiles on first row, 3 tiles on second row)',
    DASHBOARD_PRESET_CONSTANT_THREE_ROW_ONE_TITLE_ON_FIRST_ROW_TWO_ON_SECOND_ONE_ON_THIRD:
      '3 rows (1 tile on first row, 2 tiles on second row, 1 tile on third row)',
    DASHBOARD_PRESET_CONSTANT_THREE_ROW_ONE_TITLE_ON_FIRST_ROW_TWO_ON_SECOND_THREE_ON_THIRD:
      '3 rows (1 tile on first row, 2 tiles on second row, 3 tiles on third row)',
    DASHBOARD_PRESET_CONSTANT_THREE_ROW_ONE_TITLE_ON_FIRST_ROW_THREE_ON_SECOND_ONE_ON_THIRD:
      '3 rows (1 tile on first row, 3 tiles on second row, 1 tile on third row)',
    DASHBOARD_PRESET_CONSTANT_POPUP_HEADER: 'Dashboard Preset Layout',
    DASHBOARD_PRESET_CONSTANT_POPUP_TEXT: 'Select the preset layout that you want to use for your dashboard.',

    // DASHBOARD_SCHEDULING_CONSTANTS
    DASHBOARD_SCHEDULING_CONSTANTS_MESSAGE_DELETE_SCHEDULE_INSTANTCE:
      'Are you sure you want to delete the schedule instance?',
    DASHBOARD_SCHEDULING_CONSTANTS_MESSAGE_DELETE_SELECTED_SCHEDULE_INSTANTCE:
      'Are you sure you want to delete the selected schedule instance(s)?',
    DASHBOARD_SCHEDULING_CONSTANTS_TABLE_DEF_TITLE_RECIPIENTS: 'Recipient(s)',
    DASHBOARD_SCHEDULING_CONSTANTS_TABLE_DEF_TITLE_LAST_SUCCESS_RUN: 'Last Successful Run',
    DASHBOARD_SCHEDULING_CONSTANTS_TABLE_DEF_TITLE_NEXT_SCHEDULED_RUN: 'Next Scheduled Run',
    DASHBOARD_SCHEDULING_CONSTANTS_PAGE_TEXT_ADD: 'Add Schedule',
    DASHBOARD_SCHEDULING_CONSTANTS_PAGE_TEXT_EDIT: 'Edit Schedule',
    DASHBOARD_SCHEDULING_CONSTANTS_PAGE_TEXT_COPY: 'Copy Schedule',
    DASHBOARD_SCHEDULING_CONSTANTS_PAGE_TEXT_DELETE: 'Delete Schedule',
    DASHBOARD_SCHEDULING_CONSTANTS_SCHEDULE_TYPE_VALUES_SCHEDULE_REPORT: 'Scheduled Reporting Item',
    DASHBOARD_SCHEDULING_CONSTANTS_SCHEDULE_TYPE_VALUES_SCHEDULE_ALERT: 'Scheduled Alert',
    DASHBOARD_SCHEDULING_CONSTANTS_SCHEDULE_TYPE_LABEL_REPORTING_ITEM: 'Scheduled Reporting Item',
    DASHBOARD_SCHEDULING_CONSTANTS_SCHEDULE_TYPE_LABEL_SCHEDULED_ALERT: 'Scheduled Alert',
    DASHBOARD_SCHEDULING_CONSTANTS_CONTRAINTS_MESSAGE_RECIPIENTS_IS_REQUIRE: 'Recipient(s) is required.',
    DASHBOARD_SCHEDULING_CONSTANTS_SCHEDULE_REPORT: 'Scheduled Reporting Item',
    DASHBOARD_SCHEDULING_CONSTANTS_RECIPIENT_NO_EMAIL: '{0} does not have an email address.',

    // DASHBOARD_SUBSCRIPTION_CONSTANTS
    DASHBOARD_SUBSCRIPTION_CONSTANTS_PAGE_TEXT_ADD: 'Add Subscription',
    DASHBOARD_SUBSCRIPTION_CONSTANTS_PAGE_TEXT_EDIT: 'Edit Subscription',
    DASHBOARD_SUBSCRIPTION_CONSTANTS_PAGE_TEXT_COPY: 'Copy Subscription',
    DASHBOARD_SUBSCRIPTION_CONSTANTS_PAGE_TEXT_DELETE: 'Delete Subscription',
    DASHBOARD_SUBSCRIPTION_CONSTANTS_MESSAGE_DELETE_SUBSCRIBED_INSTANCE:
      'Are you sure you want to delete the subscribed instance?',
    DASHBOARD_SUBSCRIPTION_CONSTANTS_MESSAGE_DELETE_SELECTED_SUBSCRIBED_INSTANCE:
      'Are you sure you want to delete the selected subscribed instance(s)?',
    DASHBOARD_SUBSCRIPTION_CONSTANTS_MESSAGE_RECURRENCE_END_DATE:
      'Recurrence end date cannot be prior to the currently selected start date.',
    DASHBOARD_SUBSCRIPTION_CONSTANTS_MESSAGE_START_DATE_CANNOT_AFTER_END_DATE:
      'Start date cannot be after the currently selected recurrence end date.',
    DASHBOARD_SUBSCRIPTION_CONSTANTS_MESSAGE_NAME_ALREADY_EXIST: ' name already exists.',
    DASHBOARD_SUBSCRIPTION_CONSTANTS_MESSAGE_OCCURRENCE_IS_REQUIRED: 'Occurrence is required.',

    // DASHBOARD_TEXT_TITLE_TOOLBAR_CONSTANTS
    DASHBOARD_TEXT_TITLE_TOOLBAR_CONSTANTS_INCREASE_INDENT: 'Increase indent',
    DASHBOARD_TEXT_TITLE_TOOLBAR_CONSTANTS_DECREASE_INDENT: 'Decrease indent',

    // DATA_REFRESH_SETTING_CONSTANTS
    DATA_REFRESH_SETTING_CONSTANTS_UPDATE_INTERVAL_MESSAGE_UPDATE_INTERVAL_IS_REQUIRED: 'Update Interval is required.',
    DATA_REFRESH_SETTING_CONSTANTS_UPDATE_INTERVAL_MESSAGE_UPDATE_INTERVAL_SHOULD_BE_NUMBER:
      'Update Interval should be a whole number.',
    DATA_REFRESH_SETTING_CONSTANTS_LASTEST_RECORD_MESSAGE_LASTEST_RECORDS_IS_REQUIRED:
      'Only lastest records is required.',
    DATA_REFRESH_SETTING_CONSTANTS_LASTEST_RECORD_MESSAGE_LASTEST_RECORDS_SHOULD_BE_NUMBER:
      'Only lastest records should be a whole number.',

    // FILTER_DETAIL_CONFIG_CONSTANTS_VALUE_LIST_FALSE
    FILTER_DETAIL_CONFIG_CONSTANTS_SINGLE_SELECTION: 'Single Selection',
    FILTER_DETAIL_CONFIG_CONSTANTS_MULTIPLE_SELECTION: 'Multiple Selection',
    FILTER_DETAIL_CONFIG_CONSTANTS_MESSAGE_FILTER_ALIAS_EXISTS: 'This filter alias already exists.',
    FILTER_DETAIL_CONFIG_CONSTANTS_LABEL_EQUALS: 'Equals',
    FILTER_DETAIL_CONFIG_CONSTANTS_VALUE_LIST_TRUE: 'True',
    FILTER_DETAIL_CONFIG_CONSTANTS_VALUE_LIST_FALSE: 'False',
    FILTER_DETAIL_CONFIG_CONSTANTS_LABEL_SINGLE: 'Single',
    FILTER_DETAIL_CONFIG_CONSTANTS_LABEL_MULTIPLE: 'Multiple',
    FILTER_DETAIL_CONFIG_CONSTANTS_LABEL_MULTIPLE_NONE: 'None',
    FILTER_DETAIL_CONFIG_CONSTANTS_LABEL_MULTIPLE_COMMA: 'Comma',
    FILTER_DETAIL_CONFIG_CONSTANTS_LABEL_MULTIPLE_NEW_LINE: 'New Line',

    // PROPERTIES_BUILDER_CONSTANTS
    PROPERTIES_BUILDER_CONSTANTS_CUSTOM_URL_CONTENT_DESCRIPTION:
      'Allows you to define a custom URL for redirecting the user when the value in this cell is clicked',
    PROPERTIES_BUILDER_CONSTANTS_CUSTOM_URL_CONSTRAINTS_MESSAGE_URL_IS_REQUIRED: 'URL is required.',
    PROPERTIES_BUILDER_CONSTANTS_CUSTOM_URL_OPTIONS_LINK_NEW_WINDOW: 'Open link in New Window',
    PROPERTIES_BUILDER_CONSTANTS_CUSTOM_URL_OPTIONS_LINK_NEW_TAB: 'Open link in New Tab',
    PROPERTIES_BUILDER_CONSTANTS_CUSTOM_URL_OPTIONS_LINK_CURRENT_WINDOW: 'Open link in Current Window',
    PROPERTIES_BUILDER_CONSTANTS_EMBEDDED_JAVASCRIPT_CONTENT_DESCRIPTION:
      'Allows you to embedded javascript action when a field is clicked',
    PROPERTIES_BUILDER_CONSTANTS_EMBEDDED_JAVASCRIPT_MESSAGE_JAVASCRIPT_IS_REQUIRED: 'Javascript code is required.',
    PROPERTIES_BUILDER_CONSTANTS_SUB_REPORT_SUBREPORT_FILTER_TEXT:
      "Subreport's filters inherit filters from current report",
    PROPERTIES_BUILDER_CONSTANTS_SUB_REPORT_DUPLICATE_MAPPING: 'This mapping is duplicated.',
    PROPERTIES_BUILDER_CONSTANTS_SUB_REPORT_ERRORS_MULTIPLE_VALUE: 'Have multiple value for fields {0}.',
    PROPERTIES_BUILDER_CONSTANTS_SUB_REPORT_ERRORS_CANT_RESOLVE_FIELD: "Can't resolve data for fields {0}.",
    PROPERTIES_BUILDER_CONSTANTS_SUB_REPORT_ERRORS_NEED_UPDATE_RESOLVE: 'Click "Apply Filter" before open sub report.',
    PROPERTIES_BUILDER_CONSTANTS_SUB_REPORT_TABLE_DEF_FIELD_IN_CURRENT_REPORT: 'Field in Current Report',
    PROPERTIES_BUILDER_CONSTANTS_SUB_REPORT_TABLE_DEF_FIELD_IN_SUB_REPORT: 'Field in Subreport',
    PROPERTIES_BUILDER_CONSTANTS_SUB_REPORT_CONSTRAINTS_REPORTS_IS_REQUIRED: 'Reports is required.',
    PROPERTIES_BUILDER_CONSTANTS_SUB_REPORT_CONSTRAINTS_STYLE_IS_REQUIRED: 'Style is required.',
    PROPERTIES_BUILDER_CONSTANTS_SUB_REPORT_CONSTRAINTS_REPORT_PART_USED_IS_REQUIRED: 'Report Part Used is required.',
    PROPERTIES_BUILDER_CONSTANTS_MESSAGE_COLUMN_GROUP_TOOLTIP:
      'This allows you to specify a label to this field. This label will work over multiple consecutive fields.  Any field sharing the same label will be included in the same group.',
    PROPERTIES_BUILDER_CONSTANTS_MESSAGE_DUPLICATE_VIEW_SETTING:
      'Link/this icon was configured to show in other settings (Sub-report/Custom URL/ Embedded Javascript). Please select the other ones',
    PROPERTIES_BUILDER_CONSTANTS_MESSAGE_EMBEDDED_LINK_SUB_REPORT:
      'Link was configured to show in Custom URL/ Embedded Javascript. If you still want to select Embedded style for sub-report, the link in Custom URL/ Embedded Javascript will be automatically changed to icon.',
    PROPERTIES_BUILDER_BACKGROUND_IMAGE_SOURCE: 'Image Source',
    PROPERTIES_BUILDER_BACKGROUND_IMAGE_EMPTY: 'Image is not loaded',
    PROPERTIES_BUILDER_BACKGROUND_IMAGE_ERROR: 'Image loading error',

    OPEN_SUB_REPORT_WARNING_MESSAGE:
      'You are not allowed to open the subreport with Link style if the current report is not saved. Please save the current report first or change the style.',

    // REPORT_BODY_CONSTANTS
    REPORT_BODY_CONSTANTS_COLLAPSE_DEFAULT: 'Collapse to default state',
    REPORT_BODY_CONSTANTS_EXPAND_RIGHT: 'Expand to the right',
    REPORT_BODY_CONSTANTS_EXPAND_LEFT: 'Expand to the left',
    REPORT_BODY_CONSTANTS_MESSAGE_DELETE: 'Are you sure you want to delete {0} report part?',
    REPORT_BODY_CONSTANTS_MESSAGE_NAME_EXISTS: 'The Report Part Name already exists',
    REPORT_BODY_CONSTANTS_MESSAGE_NUMBER_OF_FIELDS_LIMITATION: 'The number of fields exceeds the maximum limit.',
    REPORT_BODY_CONSTANTS_MESSAGE_HAS_DATA_TYPE_IMAGE_OR_LOB:
      'The following fields have data type as Image/LOB/XML/JSON: {0}',
    REPORT_BODY_CONSTANTS_MESSAGE_CHANGE_TO_AGGREGATED_FIELD_CONFIRM:
      'The aggregated field is being used as a filter. If the function of the aggregated field is changed, it could make the filter value incorrect. Are you sure you want to change function of the aggregated field?',
    REPORT_BODY_CONSTANTS_SWITCH_TO_PREVIEW: 'Switch to Preview Mode',
    REPORT_BODY_CONSTANTS_SWITCH_TO_CONFIGURATION: 'Switch to Configuration Mode',
    REPORT_BODY_CONSTANTS_NUMBER_OF_RECORD_LIMIT_CONSTRAINT:
      'No of Record must be a number smaller than or equal to 2147483648.',
    REPORT_BODY_CONSTANTS_MESSAGE_REMOVE_BINARY_FIELD:
      'The Distinct feature from the Data Sources tab cannot be used with binary fields like Image/LOB/XML/JSON. Please disable Distinct or remove the following binary fields: {0}',
    REPORT_BODY_CONSTANTS_MESSAGE_CANNOT_GROUPED_OR_SORTED:
      'Image/LOB/XML/JSON data type cannot be grouped or sorted, so the following fields will not be added into the container: {0}',
    REPORT_BODY_CONSTANTS_MESSAGE_INVALID_COUNT_OPERATOR:
      'Image/LOB/XML/JSON data type is invalid for Count operator, so the following fields will not be added into the container: {0}',
    REPORT_BODY_CONSTANTS_MESSAGE_RESOURCE_CANNOT_FOUND: 'The resource cannot be found',
    REPORT_BODY_CONSTANTS_MESSAGE_FIELD_NOT_EXIST: 'The field {0} does not exist in the current report',
    REPORT_BODY_CONSTANTS_MESSAGE_COLUMN_NOT_EXIST: 'The field {0} is not existing in the subreport',
    REPORT_BODY_CONSTANTS_MESSAGE_UNAVAILABLE_MAP_DATA:
      'Map data is unavailable. Please contact your System Administrator for assistance.',
    REPORT_CANNOT_ADD_RUNNING_FILTER: "The field which contains RUNNING function can't be added in Filters section",
    REPORT_CANNOT_ADD_RUNNING_FIELD: 'The {0} contains the RUNNING function',
    REPORT_CONFIRM_DISABLE_MULTI_COLOR:
      'Multi-Color option is only available for single metric for all charts except Pie/Donut/Funnel/Tree Map. Please confirm you would like to keep this metric and remove the Multi-Color option.',
    FORM_CANNOT_ADD_REPEATER_RUNNING_FIELD: 'RUNNING fields can be added in the inner most repeater only',
    UNSPECIFIED_FILTER_WILL_BE_IGNORED: "Filters that aren't used in filter logic will be ignored",
    INVALID_REPORT_NAME: 'The report name is invalid when contains ["/", "<", ">", "&"] characters.',
    INVALID_REPORT_TITLE: 'The report title is invalid when contains ["/", "<", ">", "&"] characters.',
    INVALID_TEMPLATE_NAME: 'The report template name is invalid when contains ["/", "<", ">", "&"] characters.',
    // REPORT_DESIGNER_FORMAT_CONSTANTS
    REPORT_DESIGNER_FORMAT_CONSTANTS_LABEL_REPORT_HEADER: 'Report Header',
    REPORT_DESIGNER_FORMAT_CONSTANTS_LABEL_REPORT_TITLE_DESCRIPTION: 'Report Title & Description',
    REPORT_DESIGNER_FORMAT_CONSTANTS_LABEL_REPORT_TITLE: 'Report Title',
    REPORT_DESIGNER_FORMAT_CONSTANTS_LABEL_REPORT_DESCRIPTION: 'Report Description',
    REPORT_DESIGNER_FORMAT_CONSTANTS_LABEL_REPORT_FOOTER: 'Report Footer',
    REPORT_DESIGNER_FORMAT_CONSTANTS_ITEMS_TYPE_HORIZONTAL_RULE: 'Horizontal Rule',
    REPORT_DESIGNER_FORMAT_CONSTANTS_ITEMS_TYPE_VERTICAL_RULE: 'Vertical Rule',
    REPORT_DESIGNER_FORMAT_CONSTANTS_ITEMS_TYPE_PAGE_NUMBER: 'Page Number',
    REPORT_DESIGNER_FORMAT_CONSTANTS_MESSAGES_ITEM_NAME_EXISTS: 'This item name already exists in {0}.',
    REPORT_DESIGNER_FORMAT_CONSTANTS_TITLE_REPORT_FORMATTING: 'Report Formatting',
    REPORT_DESIGNER_FORMAT_CONSTANTS_LABEL_LOGO_IMAGE: 'Logo Image',
    REPORT_DESIGNER_FORMAT_CONSTANTS_LABEL_UPPER_SEPARATOR_LINE: 'Upper Separator Line',
    REPORT_DESIGNER_FORMAT_CONSTANTS_LABEL_REPORT_GENERATED: 'Report Generated',
    REPORT_DESIGNER_FORMAT_CONSTANTS_LABEL_USER: 'User',
    REPORT_DESIGNER_FORMAT_CONSTANTS_LABEL_CURRENT_DATE_TIME: 'Current Date Time',
    REPORT_DESIGNER_FORMAT_CONSTANTS_LABEL_CURRENT_USER_NAME: 'Current User Name',
    REPORT_DESIGNER_FORMAT_CONSTANTS_LABEL_LOWER_SEPARATOR_LINE: 'Lower Separator Line',
    REPORT_DESIGNER_FORMAT_CONSTANTS_LABEL_SEPARATOR_LINE: 'Separator Line',
    REPORT_DESIGNER_FORMAT_CONSTANTS_LABEL_FOOTER_TEXT: 'Footer Text',
    REPORT_DESIGNER_FORMAT_CONSTANTS_LABEL_PAGE: 'Page',
    REPORT_DESIGNER_FORMAT_CONSTANTS_LABEL_PAGE_NUMBER: 'Page Number',
    REPORT_DESIGNER_FORMAT_CONSTANTS_LABEL_REPORT_HEADER_FOOTER: 'Report Header & Footer',

    // REPORT_HISTORY_CONSTANTS
    REPORT_HISTORY_CONSTANTS_CRITERIA_LIST_VERSION: 'Version',
    REPORT_HISTORY_CONSTANTS_CRITERIA_LIST_EDITED_DATE: 'Edited Date',
    REPORT_HISTORY_CONSTANTS_CRITERIA_LIST_EDITED_BY: 'Edited By',
    REPORT_HISTORY_CONSTANTS_DESIGN: 'Design Report',
    REPORT_HISTORY_CONSTANTS_COPY: 'Copy Report',
    REPORT_HISTORY_CONSTANTS_MOVE: 'Move Report',
    REPORT_HISTORY_CONSTANTS_DELETE: 'Delete Version',
    REPORT_HISTORY_CONSTANTS_MESSAGE_DELETE_ARCHIVED: 'Are you sure you want to delete the archived version?',
    REPORT_HISTORY_CONSTANTS_MESSAGE_DELETE_ACTIVE:
      'Report and all versions will be deleted when the active version is deleted. Are you sure you want to delete the active version?',

    // REPORT_PART_CHART_CONSTANTS
    REPORT_HISTORY_CONSTANTS_VALUE_LABEL: 'Value Labels',
    REPORT_HISTORY_CONSTANTS_BUBBLE_SIZE: 'Bubble Size',
    REPORT_HISTORY_CONSTANTS_Y_AXIS: 'Y-Axis',
    REPORT_HISTORY_CONSTANTS_CHART_TYPE: 'Chart Type',
    REPORT_HISTORY_CONSTANTS_SHOW_TOTAL: 'Show Total',
    REPORT_HISTORY_CONSTANTS_X_AXIS_INTERVALS: 'The interval of the tick marks in x-axis units',
    REPORT_HISTORY_CONSTANTS_X_AXIS_STARTING_POINT:
      'The minimum value of the x-axis. If null the min value is automatically calculated',
    REPORT_HISTORY_CONSTANTS_Y_AXIS_INTERVALS: 'The interval of the tick marks in y-axis units',
    REPORT_HISTORY_CONSTANTS_Y_AXIS_STARTING_POINT:
      'The minimum value of the y-axis. If null the min value is automatically calculated',
    REPORT_HISTORY_CONSTANTS_Y_AXIS_ENDING_POINT:
      'The maximum value of the y-axis. If null the max value is automatically calculated',
    REPORT_HISTORY_CONSTANTS_X_AXIS_ENDING_POINT:
      'The maximum value of the x-axis. If null the max value is automatically calculated',
    REPORT_CHART_TYPE_LINE: 'Line',
    REPORT_CHART_TYPE_COLUMN: 'Column',
    REPORT_CHART_TYPE_BAR: 'Bar',
    REPORT_CHART_TYPE_AREA: 'Area',
    REPORT_CHART_TYPE_PIE: 'Pie',
    REPORT_CHART_TYPE_FUNNEL: 'Funnel',
    REPORT_CHART_TYPE_DONUT: 'Donut',
    REPORT_CHART_TYPE_COMBINATION: 'Combination',
    REPORT_CHART_TYPE_TREE_MAP: 'Tree Map',
    REPORT_CHART_TYPE_HEAT_MAP: 'Heat Map',
    REPORT_CHART_TYPE_BUBBLE: 'Bubble',
    REPORT_CHART_TYPE_SCATTER: 'Scatter',
    REPORT_CHART_TYPE_WATERFALL: 'Waterfall',
    REPORT_CHART_TYPE_SPARKLINE: 'Sparkline',
    REPORT_GAUGE_TYPE_SIMPLE: 'Simple',
    REPORT_GAUGE_TYPE_SOLID: 'Solid',
    REPORT_GAUGE_TYPE_LINEAR: 'Linear',
    REPORT_KPI_TYPE: 'KPI',


    // REPORT_PART_FIELD_CONSTANTS
    REPORT_PART_FIELD_CONSTANTS_MESSAGES_NOT_ACCEPT_EMPTY_FUNCTION: 'This field {0} does not accept "empty" function',

    // REPORT_EXPORT_IFRAME_CONSTANTS_POPUP
    REPORTS_CONSTANTS_IFRAME_EXPORT_POPUP_LABEL: 'I-Frame embed tag',
    REPORTS_CONSTANTS_IFRAME_EXPORT_POPUP_LABEL_COPY_PASSWORD_LINK: 'Copy I-Frame tag',
    REPORTS_CONSTANTS_IFRAME_EXPORT_POPUP_LABEL_COPY_PASTE:
      'To copy, please use Ctrl + C, to paste, please use Ctrl + V',

    //Category LookUp Constants
    CATEGORY_LOOKUP_CATEGORY_ACCESS_VISIBLE: 'Visible Categories',
    CATEGORY_LOOKUP_CATEGORY_ACCESS_ALLOWFORSAVE: 'Categories allowed for saving reports/dashboard',
    CATEGORY_LOOKUP_CATEGORY_ACCESS_AVAILABLE: 'Available Categories',
    CATEGORY_LOOKUP_LABEL_SELECT_CATEGORY: 'Select Category',
    CATEGORY_LOOKUP_LABEL_ALL_CATEGORIES: 'All Categories',
    CATEGORY_LOOKUP_LABEL_REPORT: 'Report',
    CATEGORY_LOOKUP_LABEL_DASHBOARD: 'Dashboard',
    CATEGORY_LOOKUP_LABEL_CATEGORY: 'CATEGORY',
    CATEGORY_LOOKUP_LABEL_CATEGORY_ACCESS: 'CATEGORY ACCESSIBILITY',

    // USER_ACCOUNT
    USER_LABEL_USER_NAME: 'User Name',
    USER_LABEL_EMAIL_ADDRESS: 'Email Addresses',
    USER_LABEL_ROLE: 'Role',
    USER_MESSAGE_FIELD_IS_REQUIRED: 'Field is required.',
    USER_MESSAGE_SEND_PASSWORD: 'Send password link in email',
    USER_MESSAGE_EMAIL: 'Email the new password to the following recipients',
    USER_STATE_ACTIVATE: 'Activate',
    USER_STATE_DEACTIVATE: 'Deactivate',
    USER_MESSAGE_DEACTIVE:
      'Deactivate will disable this user and will not allow them to log into the system. The user will not receive scheduled and subscribed reports. Are you sure you want to deactivate this user?',
    USER_MESSAGE_DELETE:
      'Deleting this User will delete all data belonging to the user, including: Reports, Dashboards, Scheduled Instances, Subscription Instances, etc. Are you sure you want to delete this User?',
    USER_MESSAGE_DELETE_LAST_SYSTEM_ADMIN:
      'There must be at least one System Admin user in the system. If you want to delete this System Admin user, please create another System Admin user before continuing to delete this System Admin user.',
    USER_INACTIVE_REASON_ACTIVE: 'Active',
    USER_INACTIVE_REASON_INACTIVE_USER: 'Inactive - User was deactivated',
    USER_INACTIVE_REASON_INACTIVE_PASSWORD: 'Inactive - No password set',
    USER_INACTIVE_REASON_INACTIVE_LOGIN: 'Inactive - Failed login attempts',
    USER_INACTIVE_REASON_INTEGRATION: 'Inactive',
    USER_MESSAGE_USER_ID_IS_REQUIRED: 'User ID is required.',
    USER_MESSAGE_FIRST_NAME_IS_REQUIRED: 'First Name is required.',
    USER_MESSAGE_LAST_NAME_REQUIRED: 'Last Name is required.',
    USER_MESSAGE_EMAIL_REQUIRED: 'Email is required.',
    USER_MESSAGE_ROLE_IS_REQUIRED: 'Role is required.',
    USER_MESSAGE_RECIPIENT_IS_REQUIRED: 'Recipient(s) is required.',
    USER_LABEL_ALL: 'All',
    USER_LABEL_SELECT_USER: 'Select User',
    ROLE_LABEL_SELECT_ROLE: 'Select Role',
    USER_MESSAGE_ENTER_TO_ADD_EMAIL: 'Enter to add email',
    USER_LABEL_ALL_USERS: 'All Users',
    USER_MESSAGE_CHANGE_LANGUAGE: 'The new language will be applied after your next login.',
    USER_MESSAGE_LOADING_TEXT: 'Loading users...',

    // SUBSCRIPTION
    SUBSCRIPTION_LABEL_CUSTOMER_RECERRENCE: 'Custom Recurrence',
    SUBSCRIPTION_LABEL_EVERY: 'Every',
    SUBSCRIPTION_LABEL_DAYS: 'day(s)',
    SUBSCRIPTION_LABEL_EVERY_WEEKDAY: 'Every weekday',
    SUBSCRIPTION_LABEL_EXPORT_FILE_TYPE: 'Export File Type',
    SUBSCRIPTION_LABEL_USE_SUBSCRIPTION_TIME_ZONE: 'Use Subscription Time Zone',
    SUBSCRIPTION_LABEL_EXPORT_ATTACHMENT_TYPE: 'Export Attachment Type',
    SUBSCRIPTION_LABEL_EMAIL_SUBJECT: 'Email Subject',
    SUBSCRIPTION_LABEL_EMAIL_BODY: 'Email Body',
    SUBSCRIPTION_LABEL_DELIVERY_RECIPIENT: 'Delivery & Recipient',
    SUBSCRIPTION_LABEL_DELIVERY_TYPE: 'Delivery Type',
    SUBSCRIPTION_LABEL_FILTER_VALUE_SELECTION: 'Filter Value Selection',
    SUBSCRIPTION_LABEL_INSTANCE_NAME: 'Instance Name',
    SUBSCRIPTION_LABEL_DAY: 'Day',
    SUBSCRIPTION_LABEL_OF_EVERY: 'of every',
    SUBSCRIPTION_LABEL_MONTHS: 'month(s)',
    SUBSCRIPTION_LABEL_THE: 'The',
    SUBSCRIPTION_LABEL_NO_END_DAY: 'No end date',
    SUBSCRIPTION_LABEL_END_AFTER: 'End after',
    SUBSCRIPTION_LABEL_OCCURRENCES: 'occurrences',
    SUBSCRIPTION_LABEL_END_BY: 'End by',
    SUBSCRIPTION_LABEL_RECIPIENTS: 'Recipient(s)',
    SUBSCRIPTION_LABEL_DAILY: 'Daily',
    SUBSCRIPTION_LABEL_WEEKLY: 'Weekly',
    SUBSCRIPTION_LABEL_MONTHLY: 'Monthly',
    SUBSCRIPTION_LABEL_YEARLY: 'Yearly',
    SUBSCRIPTION_LABEL_SUBSCRIPTION_TYPE: 'Subscription Type',
    SUBSCRIPTION_LABEL_SCHEDULING_TYPE: 'Scheduling Type',
    SUBSCRIPTION_LABEL_TIME_ZONE: 'Time Zone',
    SUBSCRIPTION_LABEL_START_DATE: 'Start Date',
    SUBSCRIPTION_LABEL_START_TIME: 'Start Time',
    SUBSCRIPTION_LABEL_RECURRENCE: 'Recurrence',
    SUBSCRIPTION_LABEL_SUBSCRIPTION: 'Subscription',
    SUBSCRIPTION_LABEL_DELIVERY: 'Delivery',
    SUBSCRIPTION_LABEL_SCHEDULE: 'Schedule',
    SUBSCRIPTION_LABEL_RECUR_EVERY: 'Recur every',
    SUBSCRIPTION_LABEL_WEEKS: 'week(s)',
    SUBSCRIPTION_LABEL_YEARS: 'Year(s)',
    SUBSCRIPTION_LABEL_ON: 'On',
    SUBSCRIPTION_LABEL_ON_THE: 'On the',
    SUBSCRIPTION_LABEL_OF: 'of',

    // ACCESS
    ACCESS_LABEL_DELETE_ACCESS: 'Delete access',

    // ACOUNT
    ACOUNT_MESSAGE_PROVIDE_INFO_TO_CREATE_RESET_PASSWORD:
      'Please provide your following info to create or reset your password.',
    ACOUNT_MESSAGE_PROVIDE_NEW_PASSWORD_SECURITY_TO_FURTHER_PROCEED:
      'Please provide your new password and security options to further proceed.',
    ACOUNT_LABEL_USER_ID: 'User ID',
    ACOUNT_LABEL_FIRST_NAME: 'First Name',
    ACOUNT_LABEL_LAST_NAME: 'Last Name',
    ACOUNT_LABEL_EMAIL: 'Email',
    ACOUNT_LABEL_NEXT: 'Next',
    ACOUNT_LABEL_ORGANIZATION: 'Organization',
    ACOUNT_LABEL_SIGN_IN: 'SIGN IN',
    ACOUNT_LABEL_FORGOT_PASSWORD: 'Forgot Password?',
    ACOUNT_LABEL_BACK: 'Back',
    ACOUNT_LABEL_SUBMIT: 'Submit',
    ACOUNT_LABEL_NEW_PASSWORD: 'New Password',
    ACOUNT_LABEL_CONFIRM_NEW_PASSWORD: 'Confirm New Password',

    // REPORT_PART_FIELD_PROP_SCHEMA
    REPORT_PART_FIELD_PROP_SCHEMA_FIELD_NAME_ALIAS: 'Field Name Alias',
    REPORT_PART_FIELD_PROP_SCHEMA_FIELD_NAME_ALIAS_MESSAGE_REQUIRED: 'Field Name Alias is required.',
    REPORT_PART_FIELD_PROP_SCHEMA_DATA_FORMATTING_HEADER: 'Data Formatting',
    REPORT_PART_FIELD_PROP_SCHEMA_FORMAT: 'Format',
    REPORT_PART_FIELD_PROP_SCHEMA_SORT: 'Sort',
    REPORT_PART_FIELD_PROP_SCHEMA_ALTERNATIVE_TEXT: 'Alternative Text',
    REPORT_PART_FIELD_PROP_SCHEMA_ALTERNATIVE_TEXT_SETTINGS: 'Alternative Text Settings',
    REPORT_PART_FIELD_PROP_SCHEMA_CUSTOM_URL_SETTINGS: 'Custom URL Settings',
    REPORT_PART_FIELD_PROP_SCHEMA_EMBEDDED_JAVASCRIPT_SETTINGS: 'Embedded Javascript Action Settings',
    REPORT_PART_FIELD_PROP_SCHEMA_SUBTOTAL: 'SubTotal',
    REPORT_PART_FIELD_PROP_SCHEMA_SUBTOTAL_SETTINGS: 'Subtotal Settings',
    REPORT_PART_FIELD_PROP_SCHEMA_GRAND_TOTAL_SETTING: 'Grand Total Settings',
    REPORT_PART_FIELD_PROP_SCHEMA_HEADER_FORMATING: 'Header Formatting',
    REPORT_PART_FIELD_PROP_SCHEMA_WORD_WRAP: 'Word Wrap',
    REPORT_PART_FIELD_PROP_SCHEMA_COLUMN_GROUP: 'Column Group',
    REPORT_PART_FIELD_PROP_SCHEMA_VERTICAL_HEADER: 'Vertical Header',
    REPORT_PART_FIELD_PROP_SCHEMA_HEADER_HEIGHT: 'Height',
    REPORT_PART_FIELD_PROP_SCHEMA_DRILL_DOWN: 'Drill Down',
    REPORT_PART_FIELD_PROP_SCHEMA_SUB_REPORT: 'Sub Report',
    REPORT_PART_FIELD_PROP_SCHEMA_SUB_REPORT_SETTING: 'Subreport Settings',
    REPORT_PART_FIELD_PROP_SCHEMA_ADD_FIELD_MAPPING: 'Add Field Mapping',

    // REPORT_PART_FORM_CONSTANTS
    REPORT_PART_FORM_CONSTANTS_MESSAGE_FIELD_NOT_UNIQUE: 'The inserted field {0} is not unique.',
    REPORT_PART_FORM_CONSTANTS_MESSAGE_FIELD_NAME_ALIAS_NOT_UNIQUE: 'The field name alias {0} is not unique.',
    REPORT_PART_FORM_CONSTANTS_MESSAGE_FIELD_NOT_FOUND: 'The field [{0}] is not found.',
    REPORT_PART_FORM_CONSTANTS_MESSAGE_REPORT_NOT_FOUND: 'The report [{0}] is not found',
    REPORT_PART_FORM_CONSTANTS_MESSAGE_REPORT_PART_NAME_NOT_UNIQUE: "The inserted report part's name is not unique",
    REPORT_PART_FORM_CONSTANTS_MESSAGE_REPORT_PART_NOT_FOUND: 'The report part [{0}] is not found',
    REPORT_PART_FORM_CONSTANTS_MESSAGE_DOES_NOT_ALLOW_SUBTOTAL_IN_PARALLEL:
      'Subtotals are not supported in parallel repeaters, please structure as nested repeaters.',
    REPORT_PART_FORM_CONSTANTS_MESSAGE_SUBTOTAL_IN_CHILD_LEVEL:
      'System does not allow to put the subtotal smart tag at level which is lower than the selected field.',
    REPORT_PART_FORM_CONSTANTS_MESSAGE_NO_SUBTOTAL_INFO_SET_UP:
      'The field [{0}] is used in subtotal smart tag but no subtotal info was set up for it yet.',
    REPORT_PART_FORM_CONSTANTS_MESSAGE_SUBTOTAL_INSIDE_REPEATER:
      'The field [{0}] which is used subtotal smart tag must also be placed inside a repeater.',
    REPORT_PART_FORM_CONSTANTS_MESSAGE_OPEN_NEW_FORM:
      'The current form has data. Are you sure you want to open a new form now?',
    REPORT_PART_FORM_CONSTANTS_MESSAGE_NO_GRAND_TOTOAL_INFO_SET_UP:
      'The field [{0}] is used in <grand total> smart tag but no grand total info is set up for it yet.',
    REPORT_PART_FORM_CONSTANTS_MESSAGE_NOTHING_FOUND: 'Nothing Found.',
    REPORT_PART_FORM_CONSTANTS_MESSAGE_NOTHING_TO_REPLACE: 'Nothing to Replace.',
    REPORT_PART_FORM_CONSTANTS_MESSAGE_INCORRECT_GRAND_TOTAL_SYNTAX: 'Incorrect grand total syntax',
    REPORT_PART_FORM_CONSTANTS_MESSAGE_INCORRECT_SUBTOTAL_SYNTAX: 'Incorrect subtotal syntax',
    REPORT_PART_FORM_CONSTANTS_MESSAGE_LOB_FIELDS_OUTSIDE_REPEATER: '{0} type field \'{1}\' cannot be used as a sibling element to a repeater.',
    REPORT_PART_FORM_CONSTANTS_LABEL_HEADING_1: 'Heading 1',
    REPORT_PART_FORM_CONSTANTS_LABEL_HEADING_2: 'Heading 2',
    REPORT_PART_FORM_CONSTANTS_LABEL_HEADING_3: 'Heading 3',
    REPORT_PART_FORM_CONSTANTS_LABEL_HEADING_4: 'Heading 4',
    REPORT_PART_FORM_CONSTANTS_LABEL_HEADING_5: 'Heading 5',
    REPORT_PART_FORM_CONSTANTS_LABEL_HEADING_6: 'Heading 6',
    REPORT_PART_FORM_CONSTANTS_LABEL_PARAGRAPH: 'Paragraph',
    REPORT_PART_FORM_CONSTANTS_LABEL_BLOCKQUOTE: 'Blockquote',
    REPORT_PART_FORM_CONSTANTS_LABEL_DIV: 'Div',
    REPORT_PART_FORM_CONSTANTS_LABEL_PRE: 'Pre',
    REPORT_PART_FORM_CONSTANTS_LABEL_DEFAULT: 'Default',
    REPORT_PART_FORM_CONSTANTS_LABEL_LOWER_ALPHA: 'Lower Alpha',
    REPORT_PART_FORM_CONSTANTS_LABEL_LOWER_GREEK: 'Lower Greek',
    REPORT_PART_FORM_CONSTANTS_LABEL_LOWER_ROMAN: 'Lower Roman',
    REPORT_PART_FORM_CONSTANTS_LABEL_UPPER_ALPHA: 'Upper Alpha',
    REPORT_PART_FORM_CONSTANTS_LABEL_UPPER_ROMAN: 'Upper Roman',
    REPORT_PART_FORM_CONSTANTS_LABEL_CIRCLE: 'Circle',
    REPORT_PART_FORM_CONSTANTS_LABEL_DISC: 'Disc',
    REPORT_PART_FORM_CONSTANTS_LABEL_SQUARE: 'Square',

    // REPORT_PART_GAUGE_CONSTANTS
    REPORT_PART_GAUGE_CONSTANTS_MESSAGE_LOW_VALUE_MUST_LESS_THAN_HIGH_VALUE:
      'The low value must be less than the high value',
    REPORT_PART_GAUGE_CONSTANTS_MESSAGE_THRESHOLDS_MUST_BE_WITHIN_SCALE_FORM_SCALE_TO:
      'The thresholds\' value must be within "Scale From" and "Scale To" value',
    GAUGE_MESSAGE_THRESHOL_NUMBER: "Thresholds' value must be numeric",
    GAUGE_MESSAGE_SCALE_RANGE: 'The Scale From must be lower than Scale To',
    GAUGE_MESSAGE_THRESHOLD_MAX_VALUE:
      'The Scale From must be lower than the max data value returned. Cannot draw the gauge',
    GAUGE_MESSAGE_THRESHOLD_MIN_VALUE:
      'The Scale To must be greater than the min data value returned. Cannot draw the gauge',
    REPORT_PART_GAUGE_CONSTANTS_LABEL_STATIC: 'Static',
    REPORT_PART_GAUGE_CONSTANTS_LABEL_DYNAMIC: 'Dynamic',
    REPORT_PART_GAUGE_CONSTANTS_LABEL_LESS_THAN: 'Less Than',
    REPORT_PART_GAUGE_CONSTANTS_LABEL_BETWEEN: 'Between',
    REPORT_PART_GAUGE_CONSTANTS_LABEL_GREATER_THAN: 'Greater Than',
    REPORT_PART_GAUGE_CONSTANTS_LABEL_TARGET: 'Target',
    REPORT_PART_GAUGE_CONSTANTS_LABEL_LINEAR_GAUGE: 'Linear Gauge',
    REPORT_PART_GAUGE_CONSTANTS_LABEL_SIMPLE_GAUGE: 'Simple Gauge',
    REPORT_PART_GAUGE_CONSTANTS_LABEL_SOLID_GAUGE: 'Solid Gauge',

    // REPORT_PART_GAUGE_PROPS_SCHEMA
    REPORT_PART_GAUGE_PROPS_SCHEMA_LABEL_GENERAL_INFO: 'General Info',
    REPORT_PART_GAUGE_PROPS_SCHEMA_LABEL_GAUGE_TYPE: 'Gauge Type',
    REPORT_PART_GAUGE_PROPS_SCHEMA_LABEL_BORDER: 'Border',
    REPORT_PART_GAUGE_PROPS_SCHEMA_LABEL_GAUGE_BORDER_SETTINGS: 'Gauge Border Settings',
    REPORT_PART_GAUGE_PROPS_SCHEMA_LABEL_INTERVALS: 'Intervals',
    REPORT_PART_GAUGE_PROPS_SCHEMA_LABEL_INTERVAL_OF_TICK: 'The interval of the tick marks in y-axis units',
    REPORT_PART_GAUGE_PROPS_SCHEMA_LABEL_GROUPING: 'Grouping',
    REPORT_PART_GAUGE_PROPS_SCHEMA_LABEL_SHOW_LABEL: 'Show Labels',
    REPORT_PART_GAUGE_PROPS_SCHEMA_LABEL_INVERTED: 'Inverted',
    REPORT_PART_GAUGE_PROPS_SCHEMA_LABEL_USE_PAGINATION: 'Use Pagination',
    REPORT_PART_GAUGE_PROPS_SCHEMA_LABEL_USE_PAGINATION_ITEM_PER_ROW: 'Item(s) Per Row',
    REPORT_PART_GAUGE_PROPS_SCHEMA_LABEL_PRINTING: 'Printing',
    REPORT_PART_GAUGE_PROPS_SCHEMA_PAGE_BREAK_AFTER_SEPARATOR: 'Page Break After Separator',

    // REPORT_PART_GRID_CONSTANTS
    REPORT_PART_GRID_CONSTANTS_LABEL_VERTICAL: 'Vertical',
    REPORT_PART_GRID_CONSTANTS_LABEL_HORIZONTAL: 'Horizontal',
    REPORT_PART_GRID_CONSTANTS_LABEL_PIVOT: 'Pivot',
    REPORT_PART_GRID_CONSTANTS_LABEL_DRILL_DOWN: 'Drilldown',
    REPORT_PART_GRID_CONSTANTS_LABEL_COMMA: 'Comma',
    REPORT_PART_GRID_CONSTANTS_LABEL_COMMA_WITH_LABEL: 'Comma With Label',
    REPORT_PART_GRID_CONSTANTS_LABEL_LINE: 'Line',
    REPORT_PART_GRID_CONSTANTS_LABEL_LINE_WITH_LABEL: 'Line With Label',
    REPORT_PART_GRID_CONSTANTS_LABEL_MULTI_LEVEL: 'Multi Level',
    REPORT_PART_GRID_CONSTANTS_LABEL_MULTI_LEVEL_WITH_LABEL: 'Multi Level With Label',
    REPORT_PART_GRID_CONSTANTS_LABEL_LOGICAL: 'Logical',
    REPORT_PART_GRID_CONSTANTS_MESSAGE_SEPARATOR_CONFIRM:
      'The Separator container will be hidden and its fields will be removed. Are you sure you want to hide it?',
    REPORT_PART_GRID_CONSTANTS_MESSAGE_FUNCTION_INCONSISTENT:
      'If functions are used on any field, each field selection must have a function set',
    REPORT_PART_GRID_CONSTANTS_MESSAGE_CHANGE_FUNCTION_TYPE:
      'The function type can be changed to be suitable with the new grid style.',
    REPORT_PART_GRID_CONSTANTS_LABEL_TITTLE_SETTINGS_TOOLTIP: 'Title Settings',
    REPORT_PART_GRID_CONSTANTS_LABEL_DESCRIPTION_SETTING_TOOLTIP: 'Description Settings',
    REPORT_PART_GRID_CONSTANTS_LABEL_EXPAND_ALL_TOOLTIP: 'Expand All',
    REPORT_PART_GRID_CONSTANTS_LABEL_COLLAPSE_ALL_TOOLTIP: 'Collapse All',
    REPORT_PART_GRID_CONSTANTS_LABEL_DISABLE_REPEAT_HEADERS: 'Disable Repeat Headers',
    REPORT_PART_GRID_CONSTANTS_LABEL_FREEZE_HEADERS: 'Freeze Headers',
    REPORT_PART_GRID_CONSTANTS_LABEL_VERTICALLY: 'Vertically',
    REPORT_PART_GRID_CONSTANTS_LABEL_HORIZONTALLY: 'Horizontally',
    // PAGE_NUMBER_OPTIONS
    PAGE_NUMBER_OPTIONS_PAGE_ONLY: 'Page Number',
    PAGE_NUMBER_OPTIONS_PAGE_OF_TOTAL: 'Page Number of Total Pages',
    PAGE_NUMBER_OPTIONS_PAGE_TOTAL: 'Page Number / Total Pages',

    // REPORT_PART_PROPS_CHART_SCHEMA
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_CHART_TYPE: 'Chart Type',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_LIBRARY: 'Library',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_CHART_LIBRARY: 'Chart Library',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_CHART_BORDER_SETTINGS: 'Chart Border Settings',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_CHART_BACKGROUND_COLOR_SETTINGS: 'Chart Background Color Settings',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_XY_PLANE: 'XY-Plane',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_CHART_XY_PLANE_SETTINGS: 'Chart XY-Plane Settings',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_XY_PLANE_SETTINGS: 'XY-Plane Settings',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_GRID_LINES: 'Grid Lines',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_CHART_GRID_LINES_SETTINGS: 'Chart Grid Lines Settings',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_GRID_LINES_SETTINGS: 'Grid Lines Settings',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_MULTI_COLOR_SETTINGS: 'Multi-Color Setting',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_MULTI_COLOR: 'Multi-Color',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_MULTI_COLOR_INFO:
      'This option sets each value in a single metric chart to a new color, this is only available for single metric charts.',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_MULTI_LEVEL_SETTINGS: 'Multi-Level Setting',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_MULTI_LEVEL: 'Multi-Level',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_MULTI_LEVEL_INFO:
      'This option illustrates the hierarchy property of the Treemap data inside only one chart.',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_LABELS: 'Labels',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_DATA_LABELS: 'Data Labels',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_X_LABELS: 'X Labels',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_Y_LABELS: 'Y Labels',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_HOVER_LABELS: 'Hover Labels Area',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_LEGENDS: 'Legends',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_SETTINGS: 'Settings',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_CHART_LEGEND_SETTINGS: 'Chart Legend Settings',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_LEGEND_SETTINGS: 'Legend Settings',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_STACKED: 'Stacked',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_BOTTOM_PERCENT_GROUPED_TO_OTHER: 'Bottom X% Grouped to Other',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_DATA: 'Data',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_SHOW_PERCENTAGE: 'Show Percentage',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_SHOW_VALUE_LABELS: 'Show Value Labels',
    REPORT_PART_PROPS_CHART_SCHEMA_SHOW_TOOLTIPS: 'Show Tooltips',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_SHOW_SLICE_LABELS: 'Show Slice Labels',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_SHOW_VALUE_FIELD_NAME: 'Show Values Field Name',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_RANGE: 'Range',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_THRESHOLDS: 'Thresholds',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_THRESHOLDS_SETTINGS: 'Thresholds Settings',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_REGRESSION_LINE: 'Regression Line',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_REGRESSION_LINE_SETTINGS: 'Regression Line Settings',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_STEP: 'Step',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_SPLINE: 'Spline',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_PIE_CHART_STYLE: 'Pie Chart Style',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_BASIC: 'Basic',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_RING: 'Ring',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_SEMI_CIRCLE: 'Semi Circle',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_SOLID: 'Solid',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_DOT: 'Dot',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_DASH: 'Dash',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_RANGE_ONLY: 'Range Only',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_RANGE_WITH_AVERAGE: 'Range with Average',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_LAYOUT_HORIZONTAL: 'Horizontal',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_LAYOUT_VERTICAL: 'Vertical',
    REPORT_PART_PROPS_CHART_SCHEMA_LABEL_SINGLE_YAXIS: 'Single Y-axis',

    // REPORT_PART_PROPS_FORM_SCHEMA
    REPORT_PART_PROPS_FORM_SCHEMA_FILE: 'File',
    REPORT_PART_PROPS_FORM_SCHEMA_NEW_DOCUMENT: 'New Document',
    REPORT_PART_PROPS_FORM_SCHEMA_FORM_BORDER_SETTINGS: 'Form Border Settings',
    REPORT_PART_PROPS_FORM_SCHEMA_BACKGROUND_COLOR_SETTINGS: 'Background Color Settings',
    REPORT_PART_PROPS_FORM_SCHEMA_TOOL_BAR: 'ToolBar',
    REPORT_PART_PROPS_FORM_SCHEMA_CUT: 'Cut (Ctrl+X)',
    REPORT_PART_PROPS_FORM_SCHEMA_COPY: 'Copy (Ctrl+C)',
    REPORT_PART_PROPS_FORM_SCHEMA_PASTE: 'Paste (Ctrl+V)',
    REPORT_PART_PROPS_FORM_SCHEMA_PASTE_AS_TEXT: 'Paste as Text',
    REPORT_PART_PROPS_FORM_SCHEMA_SELECT_ALL: 'Select All (Ctrl+A)',
    REPORT_PART_PROPS_FORM_SCHEMA_FIND_AND_REPLACE_SHORT_CUT: 'Find and Replace (Ctrl+F)',
    REPORT_PART_PROPS_FORM_SCHEMA_FIND_AND_REPLACE: 'Find and Replace',
    REPORT_PART_PROPS_FORM_SCHEMA_UNDO: 'Undo (Ctrl+Z)',
    REPORT_PART_PROPS_FORM_SCHEMA_REDO: 'Redo (Ctrl+Y)',
    REPORT_PART_PROPS_FORM_SCHEMA_ITEM: 'Item',
    REPORT_PART_PROPS_FORM_SCHEMA_INSERT_EDIT_LINK: 'Insert/edit link (Ctrl+K)',
    REPORT_PART_PROPS_FORM_SCHEMA_INSERT_EDIT_IMAGE: 'Insert/edit image',
    REPORT_PART_PROPS_FORM_SCHEMA_INSERT_EDIT_ANCHOR: 'Insert/edit anchor',
    REPORT_PART_PROPS_FORM_SCHEMA_INSERT_SPECIAL_CHARACTER: 'Insert special character',
    REPORT_PART_PROPS_FORM_SCHEMA_INSERT_DATE_TIME_VALUE: 'Insert date/time value',
    REPORT_PART_PROPS_FORM_SCHEMA_HORIZONTAL_LINE: 'Horizontal Line',
    REPORT_PART_PROPS_FORM_SCHEMA_INSERT_PAGE_BREAK: 'Insert Page Break',
    REPORT_PART_PROPS_FORM_SCHEMA_ADD_FIELD: 'Add a field',
    REPORT_PART_PROPS_FORM_SCHEMA_FIELD_SELECTION: 'Field Selection',
    REPORT_PART_PROPS_FORM_SCHEMA_SMART_TAG: 'Smart Tag',
    REPORT_PART_PROPS_FORM_SCHEMA_REPEATER: 'Repeater',
    REPORT_PART_PROPS_FORM_SCHEMA_INSERT_REPEATER: 'Insert Repeater',
    REPORT_PART_PROPS_FORM_SCHEMA_BLOCKS: 'Blocks',
    REPORT_PART_PROPS_FORM_SCHEMA_SUPERSCRIPT: 'Superscript',
    REPORT_PART_PROPS_FORM_SCHEMA_SUBSCRIPT: 'Subscript',
    REPORT_PART_PROPS_FORM_SCHEMA_CODE: 'Code',
    REPORT_PART_PROPS_FORM_SCHEMA_LIST: 'List',
    REPORT_PART_PROPS_FORM_SCHEMA_INDENT: 'Indent',
    REPORT_PART_PROPS_FORM_SCHEMA_INCREASE_INDENT: 'Increase indent',
    REPORT_PART_PROPS_FORM_SCHEMA_DECREASE_INDENT: 'Decrease indent',
    REPORT_PART_PROPS_FORM_SCHEMA_NON_EDITABLE: 'Non-editable',
    REPORT_PART_PROPS_FORM_SCHEMA_CLEAR_FORMATTING: 'Clear Formatting',
    REPORT_PART_PROPS_FORM_SCHEMA_INSERT_TABLE: 'Insert Table',
    REPORT_PART_PROPS_FORM_SCHEMA_DELETE_TABLE: 'Delete Table',
    REPORT_PART_PROPS_FORM_SCHEMA_TABLE_PROPERTIES: 'Table Properties',
    REPORT_PART_PROPS_FORM_SCHEMA_CELL: 'Cell',
    REPORT_PART_PROPS_FORM_SCHEMA_CELL_PROPERTIES: 'Cell Properties',
    REPORT_PART_PROPS_FORM_SCHEMA_MERGE_CELL: 'Merge Cells',
    REPORT_PART_PROPS_FORM_SCHEMA_SPLIT_CELL: 'Split Cell(s)',
    REPORT_PART_PROPS_FORM_SCHEMA_ROW: 'Row',
    REPORT_PART_PROPS_FORM_SCHEMA_INSERT_ROW_BEFORE: 'Insert Row Before',
    REPORT_PART_PROPS_FORM_SCHEMA_INSERT_ROW_AFTER: 'Insert Row After',
    REPORT_PART_PROPS_FORM_SCHEMA_INSERT_DELETE_ROW: 'Delete Row',
    REPORT_PART_PROPS_FORM_SCHEMA_ROW_PROPERTIES: 'Row Properties',
    REPORT_PART_PROPS_FORM_SCHEMA_CUT_ROW: 'Cut Row',
    REPORT_PART_PROPS_FORM_SCHEMA_COPY_ROW: 'Copy Row',
    REPORT_PART_PROPS_FORM_SCHEMA_PASTE_ROW_BEFORE: 'Paste Row Before',
    REPORT_PART_PROPS_FORM_SCHEMA_PASTE_ROW_AFTER: 'Paste Row After',
    REPORT_PART_PROPS_FORM_SCHEMA_INSERT_COLUMN_BEFORE: 'Insert Column Before',
    REPORT_PART_PROPS_FORM_SCHEMA_INSERT_COLUMN_AFTER: 'Insert Column After',
    REPORT_PART_PROPS_FORM_SCHEMA_DELETE_COLUMN: 'Delete Column',
    REPORT_PART_PROPS_FORM_SCHEMA_TOOL: 'Tool',
    REPORT_PART_PROPS_FORM_SCHEMA_DIRECTIONALITY: 'Directionality',
    REPORT_PART_PROPS_FORM_SCHEMA_RIGHT_TO_LEFT: 'Right to Left',
    REPORT_PART_PROPS_FORM_SCHEMA_LEFT_TO_RIGHT: 'Left to Right',
    REPORT_PART_PROPS_FORM_SCHEMA_WRAP_TEXT: 'Wrap Text',
    REPORT_PART_PROPS_FORM_SCHEMA_HIGHTLIGHT_CODE: 'Highlight Code',
    REPORT_PART_PROPS_FORM_SCHEMA_REFORMAT: 'Reformat',
    REPORT_PART_PROPS_FORM_SCHEMA_SHOW_INVISIBLE_CHARACTERS: 'Show invisible characters',
    REPORT_PART_PROPS_FORM_SCHEMA_SHOW_VISUAL_AIDS: 'Visual Aids',
    REPORT_PART_PROPS_FORM_SCHEMA_SHOW_TOOLBAR: 'Show Toolbar',
    REPORT_PART_PROPS_FORM_SCHEMA_FULLSCREEN: 'Fullscreen',
    REPORT_PART_PROPS_FORM_SCHEMA_PRINTING: 'Printing',
    REPORT_PART_PROPS_FORM_SCHEMA_PAGE_BREAK_AFTER_EACH_ENTRY: 'Page Break After Each Entry',

    // REPORT_PART_SELECTION_CONSTANTS
    REPORT_PART_SELECTION_CONSTANTS_SUB_CATEGORY: 'Sub Category',
    REPORT_PART_SELECTION_CONSTANTS_REPORT_PART_TITLE: 'Report Part Title',
    REPORT_PART_SELECTION_CONSTANTS_REPORT_PART_TYPE: 'Report Part Type',

    // REPORT_PART_TILE_BACK_SIDE_FOOTER_CONFIG
    REPORT_PART_TILE_BACK_SIDE_FOOTER_CONFIG_OPEN: 'Open',
    REPORT_PART_TILE_BACK_SIDE_FOOTER_CONFIG_EDIT: 'Edit',
    REPORT_PART_TILE_BACK_SIDE_FOOTER_CONFIG_QUICK_EDIT: 'Quick Edit',
    REPORT_PART_TILE_BACK_SIDE_FOOTER_CONFIG_DESIGN: 'Design',
    REPORT_PART_TILE_BACK_SIDE_FOOTER_CONFIG_SELECT_REPORT_PART: 'Select Report Part',

    // REPORTS_CONSTANTS
    REPORTS_CONSTANTS_REPORT_MESSAGE_DELETE_REPORT: 'Are you sure you want to delete "{0}" report?',
    REPORTS_CONSTANTS_REPORT_MESSAGE_DELETE_TEMPLATE: 'Are you sure you want to delete "{0}" template?',
    REPORTS_CONSTANTS_REPORT_MESSAGE_SUCCESSFULLY_COPIED: 'The {0} {1} was successfully copied to {2}{3}.',
    REPORTS_CONSTANTS_REPORT_MESSAGE_SUCCESSFULLY_MOVED: 'The {0} {1} was successfully moved to {2}{3}.',
    REPORTS_CONSTANTS_REPORT_MESSAGE_SAVE_REPORT:
      'From this moment, any field selected in report part and/or any filter which is marked to be invisible will be hidden in the {0} in Report Viewer. Are you sure you want to make the item(s) hidden in the {0} in Report Viewer?',
    REPORTS_CONSTANTS_REPORT_MESSAGE_SAVE_AS_REPORT:
      'A new report/template will be created by using Save As function. Any field selected in the report part and/or any filter which is marked to be invisible will be hidden in the new report/template in Report Viewer. Are you sure you want to make the item(s) hidden in the new report/template in Report Viewer?',
    REPORTS_CONSTANTS_REPORT_MESSAGE_INVALID_REPORT:
      'This report is no longer valid. Please contact your System Administrator for assistance.',
    REPORTS_CONSTANTS_REPORT_MESSAGE_DIFFERENT_SCHEMA:
      'Returned fields of the following stored procedure(s) are different with the current field list after it is executed with new filter value. The system will revert the new filter value to the previous valid one.',
    REPORTS_CONSTANTS_REPORT_MESSAGE_SELECT_FILTER_VALUE:
      'Please select one specific filter value for the following filter(s) and then click "Apply Filter" button to get the updated schema for the corresponding selected stored procedure(s).',
    REPORTS_CONSTANTS_REPORT_MESSAGE_SELECT_REQUIRE_AND_NOT_VISIBLE_FIELD:
      'Please select filter value(s) for the following filter(s) and click "Apply Filter" to refresh data.',
    REPORTS_CONSTANTS_REPORT_MESSAGE_SELECT_REQUIRE_AND_VISIBLE_FIELD:
      'Please select filter value(s) for the following filter(s) and click "Apply Filter" to refresh data.',
    REPORTS_CONSTANTS_REPORT_MESSAGE_REQUIRED_FILTER_EXPORT:
      'Please select filter value(s) for the filter(s) and try to export again.',
    REPORTS_CONSTANTS_REPORT_MESSAGE_REQUIRED_FILTER_PRINT:
      'Please select filter value(s) for the filter(s) and try to print again.',
    REPORTS_CONSTANTS_REPORT_MESSAGE_REQUIRED_FILTER_EMAIL:
      'Please select filter value(s) for the filter(s) and try to email again.',
    REPORTS_CONSTANTS_REPORT_MESSAGE_CLICK_UPDATE_RESULT:
      'Please click on "Apply Filter" to refresh the data in this report.',
    REPORTS_CONSTANTS_REPORT_MESSAGE_TEXT_CREATE_CATEGORY: '(Enter to create new Category)',
    REPORTS_CONSTANTS_REPORT_MESSAGE_TEXT_CREATE_SUB_CATEGORY: '(Enter to create new Sub-Category)',
    REPORTS_CONSTANTS_REPORT_LABEL_REPORT_PART_PROPERTIES: 'Report Part Properties',
    REPORTS_CONSTANTS_REPORT_LABEL_FORMAT_PROPERTIES: 'Format Properties',
    REPORTS_CONSTANTS_REPORT_LABEL_SUBREPORT: 'Subreport',
    REPORTS_CONSTANTS_REPORT_LABEL_MOVE: 'Move ',
    REPORTS_CONSTANTS_REPORT_LABEL_COPY: 'Copy ',
    REPORTS_CONSTANTS_LABEL_ALL_REPORTS: 'ALL REPORTS',
    REPORTS_CONSTANTS_LABEL_ALL_TEMPLATES: 'ALL TEMPLATES',
    REPORTS_CONSTANTS_REPORT_MESSAGE_INVALID_REPORTPART:
      'Report part(s) contain invalid field(s). Please check on each report part for details.',
    REPORTS_CONSTANTS_REPORT_MESSAGE_UNSELECTING_GLOBAL:
      'You are unselecting the Global Report checkbox. Any roles which do not exist in the related tenant will be removed in Sharing With Roles in Access page. Are you sure you want to unselect this checkbox?',
    REPORTS_CONSTANTS_REPORT_MESSAGE_SELECTING_GLOBAL:
      'You are selecting the Global Report checkbox. Any sharing with users will be removed in Access page and all schedules will be removed. Are you sure you want to select this checkbox?',
    REPORT_CONSTANTS_DRILL_DOWN_STATE_MAINTAIN: 'How would you like to export this report?',
    REPORT_CONSTANT_DRILL_DOWN_EXPORT_WITH_PREVIEW_STATE: 'Export with all rows as shown in viewer?',
    REPORT_CONSTANT_DRILL_DOWN_EXPORT_WITHOUT_PREVIEW_STATE: 'Export with all expanded records',
    REPORT_CONSTANT_ASYNC_EXPORT_IN_PROGRESS: '{0} export of "{1}" {2} is in progress. You can download exported {2} from "Export Manager" when it is available.',

    INCLUDE_FILTER_ON_FIRST_PAGE_IN_EXPORT: 'Display filters on the first page of report',
    INCLUDE_FILTER_ON_LAST_PAGE_IN_EXPORT: 'Display filters on the last page of report',
    INCLUDE_FILTER_VALUE_IN_EXPORT: 'Filters have been applied to this report. Do you want to include filters and their values in this exports?',

    // REPORT_SUBCRIPTION_CONSTANT
    REPORT_SUBCRIPTION_CONSTANT_SUBSCRIPTION_REPORT: 'Subscription Reporting Item',
    REPORT_SUBCRIPTION_CONSTANT_MESSAGE_DELETE_INSTANCE: 'Are you sure you want to delete the subscribed instance?',
    REPORT_SUBCRIPTION_CONSTANT_MESSAGE_DELETE_SELECTED_INSTANTCES:
      'Are you sure you want to delete the selected subscribed instance(s)?',
    REPORT_SUBCRIPTION_CONSTANT_MESSAGE_END_DATE_CANNOT_PRIOR_CURRENT_DATE:
      'Recurrence end date cannot be prior to the currently selected start date.',
    REPORT_SUBCRIPTION_CONSTANT_MESSAGE_START_DATE_CANNOT_AFTER_END_DATE:
      'Start date cannot be after the currently selected recurrence end date.',
    REPORT_SUBCRIPTION_CONSTANT_MESSAGE_NAME_EXIST: 'This instance name already exists.',
    REPORT_SUBCRIPTION_CONSTANT_MESSAGE_ADJUSTED_ACCORDINGLY:
      'Due to your schedule configuration the start date of the subscription must be auto adjusted accordingly. You can review the adjusted start date before further proceed.',
    REPORT_SUBCRIPTION_CONSTANT_MESSAGE_REQUIRED_OCCURRENCE: 'Occurrence is required.',
    REPORT_SUBCRIPTION_CONSTANT_MESSAGE_DELIVERY_TYPE_NO_PERM: 'You do not have permission for delivery type "{0}". Please choose another one.',
    REPORT_SUBCRIPTION_CONSTANT_MESSAGE_ATTACHMENT_TYPE_NO_PERM: 'You do not have permission for attachment type "{0}". Please choose another one.',
    REPORT_SUBCRIPTION_CONSTANT_MESSAGE_FILE_TYPE_NO_PERM: 'You do not have permission for file type "{0}". Please choose another one.',
    REPORT_SUBCRIPTION_CONSTANT_MESSAGE_CANNOT_BE_SUBSCRIBE:
      'The report cannot be subscribed because you do not have an email address set up in the system. Please contact your System Administrator for assistance.',
    REPORT_SUBCRIPTION_CONSTANT_ADD: 'Add Subscription',
    REPORT_SUBCRIPTION_CONSTANT_EDIT: 'Edit Subscription',
    REPORT_SUBCRIPTION_CONSTANT_COPY: 'Copy Subscription',
    REPORT_SUBCRIPTION_CONSTANT_DELETE: 'Delete Subscription',
    REPORT_SUBCRIPTION_CONSTANT_SUBSCRIPTION_TYPE_REPORTING_ITEM: 'Subscribed Reporting Item',
    REPORT_SUBCRIPTION_CONSTANT_SUBSCRIPTION_TYPE_ALERT: 'Subscribed Alert',
    REPORT_SUBCRIPTION_CONSTANT_FILE_LOCATION: 'File Location',
    REPORT_SUBCRIPTION_CONSTANT_SEND_TO_DISK: 'Send to disk',
    REPORT_SUBCRIPTION_CONSTANT_INSTANCE_NAME_REQUIRED: 'Instance Name is required.',
    REPORT_SUBCRIPTION_CONSTANT_START_DATE_REQUIED: 'Start Date is required.',
    REPORT_SUBCRIPTION_CONSTANT_START_TIME_REQUIED: 'Start Time is required.',
    REPORT_SUBCRIPTION_CONSTANT_DELIVERY_TYPE_REQUIED: 'Delivery type is required.',
    REPORT_SUBCRIPTION_CONSTANT_DELIVERY_METHOD_REQUIED: 'Delivery method is required.',
    REPORT_SUBCRIPTION_CONSTANT_SYSTEM_VARIABLES_TITLE: 'System Variables',
    REPORT_SUBCRIPTION_CONSTANT_SYSTEM_VARIABLES_INSTRUCTION: 'Select system variable to proceed',

    // REPORT
    REPORT_LABEL_QUICK_EDIT: 'Quick Edit',
    REPORT_LABEL_DESIGN: 'Design',
    REPORT_LABEL_VIEW_HISTORY: 'View History',
    REPORT_LABEL_NUMBER_OF_SUBSCRIPTION: '{0} Subscription',
    REPORT_LABEL_VIEW_MODE: 'View Mode',
    REPORT_LABEL_VERSION: 'Version:',
    REPORT_LABEL_REPORT_OWNER: 'Report Owner',
    REPORT_LABEL_REPORT_HISTORY: 'Report History',
    REPORT_LABEL_REPORT_FILTER_INFO: 'Report Filter Info:',
    REPORT_LABEL_FILTERS: 'Filters',

    // SCHEDULE_CONSTANTS
    SCHEDULE_CONSTANTS_RECURRENCE_PATTERN_DAILY: 'daily',
    SCHEDULE_CONSTANTS_RECURRENCE_PATTERN_WEEKLY: 'weekly',
    SCHEDULE_CONSTANTS_RECURRENCE_PATTERN_MONTHLY: 'monthly',
    SCHEDULE_CONSTANTS_RECURRENCE_PATTERN_YEARLY: 'yearly',
    SCHEDULE_CONSTANTS_RECURRENCE_REPORTLIST_CUSTOM_RECURRENCE: 'Custom Recurrence',
    SCHEDULE_CONSTANTS_RECURRENCE_ALERTLIST_ALERT_HOURLY: 'Alert Hourly',
    SCHEDULE_CONSTANTS_RECURRENCE_ALERTLIST_ALERT_DAILY: 'Alert Daily',
    SCHEDULE_CONSTANTS_ORDINAL_LIST_FIRST: 'first',
    SCHEDULE_CONSTANTS_ORDINAL_LIST_SECOND: 'second',
    SCHEDULE_CONSTANTS_ORDINAL_LIST_THIRD: 'third',
    SCHEDULE_CONSTANTS_ORDINAL_LIST_FOURTH: 'fourth',
    SCHEDULE_CONSTANTS_ORDINAL_LIST_LAST: 'last',
    SCHEDULE_CONSTANTS_MONTHNAME_LIST_JANUARY: 'January',
    SCHEDULE_CONSTANTS_MONTHNAME_LIST_FEBRUARY: 'February',
    SCHEDULE_CONSTANTS_MONTHNAME_LIST_MARCH: 'March',
    SCHEDULE_CONSTANTS_MONTHNAME_LIST_APRIL: 'April',
    SCHEDULE_CONSTANTS_MONTHNAME_LIST_MAY: 'May',
    SCHEDULE_CONSTANTS_MONTHNAME_LIST_JUNE: 'June',
    SCHEDULE_CONSTANTS_MONTHNAME_LIST_JULY: 'July',
    SCHEDULE_CONSTANTS_MONTHNAME_LIST_AUGUST: 'August',
    SCHEDULE_CONSTANTS_MONTHNAME_LIST_SEPTEMBER: 'September',
    SCHEDULE_CONSTANTS_MONTHNAME_LIST_OCTOBER: 'October',
    SCHEDULE_CONSTANTS_MONTHNAME_LIST_NOVEMBER: 'November',
    SCHEDULE_CONSTANTS_MONTHNAME_LIST_DECEMBER: 'December',
    SCHEDULE_CONSTANTS_MESSAGE_RECURRENCE_DAYS_REQUIRED: 'Recurrence day(s) value is required.',
    SCHEDULE_CONSTANTS_MESSAGE_RECURRENCE_WEEKS_REQUIRED: 'Recurrence week(s) value is required.',
    SCHEDULE_CONSTANTS_MESSAGE_RECURRENCE_DAY_REQUIRED: 'Day is required.',
    SCHEDULE_CONSTANTS_MESSAGE_RECURRENCE_MONTHS_REQUIRED: 'Recurrence month(s) is required.',
    SCHEDULE_CONSTANTS_MESSAGE_RECURRENCE_YEARS_REQUIRED: 'Recurrence year(s) is required.',

    // REPORT PART MAP CONSTANT
    REPORT_PART_MAP_CONSTANTS_MAP_TYPE: 'Map Type',
    REPORT_PART_MAP_CONSTANTS_WORLD: 'World',
    REPORT_PART_MAP_CONSTANTS_GOOGLE: 'Google',
    REPORT_PART_MAP_CONSTANTS_CONTINENT: 'Continent',
    REPORT_PART_MAP_CONSTANTS_COUNTRY: 'Country',
    REPORT_PART_MAP_CONSTANTS_STATE: 'State',
    REPORT_PART_MAP_CONSTANTS_MAP_BORDER_SETTINGS: 'Map Border Settings',
    REPORT_PART_MAP_CONSTANTS_MAP_BACKGROUND_COLOR_SETTINGS: 'Map Background Color Settings',
    REPORT_PART_MAP_CONSTANTS_SHOW_MAP_LABELS: 'Show Map Labels',
    REPORT_PART_MAP_CONSTANTS_MAP_LEGEND_SETTINGS: 'Map Legend Settings',
    REPORT_PART_MAP_CONSTANTS_VIEW: 'View',
    REPORT_PART_MAP_CONSTANTS_ZOOM: 'Zoom',
    REPORT_PART_MAP_CONSTANTS_ZOOM_SETTINGS: 'Zoom Settings',
    REPORT_PART_MAP_CONSTANTS_BUBBLE_METRIC: 'Bubble Metric',
    REPORT_PART_MAP_CONSTANTS_SHADING_METRIC: 'Shading Metric',
    REPORT_PART_MAP_POINT_country: 'Country',
    REPORT_PART_MAP_POINT_state: 'State/Province',
    REPORT_PART_MAP_POINT_county: 'County',
    REPORT_PART_MAP_POINT_city: 'City',
    REPORT_PART_MAP_POINT_postalCode: 'Postal Code',
    REPORT_PART_MAP_POINT_address: 'Address',
    REPORT_PART_MAP_POINT_latitude: 'Latitude',
    REPORT_PART_MAP_POINT_longtitude: 'Longitude',
    REPORT_PART_MAP_POINT_latitude_longtitude: 'Latitude/Longitude',
    REPORT_PART_MAP_GOOGLE_MAP_ERROR: 'Cannot draw Google map. Please contact System Administrator for assistance.',

    // THRESHOLD_GRID_CONSTANT
    THRESHOLD_GRID_CONSTANT_LABEL: 'Label',
    THRESHOLD_GRID_CONSTANT_DASHSTYLE: 'DashStyle',
    THRESHOLD_GRID_CONSTANT_THICKNESS: 'Thickness',
    THRESHOLD_GRID_CONSTANT_MESSAGE_THRESHOLD_EXIST: 'The {0} threshold line already exists.',
    THRESHOLD_GRID_CONSTANT_MESSAGE_THRESHOLD_VALUE_EXIST: 'The threshold line whose value = {0} already exists.',
    THRESHOLD_GRID_CONSTANT_MESSAGE_THRESHOLD_REQUIRED_VALUE: 'The Threshold Value is required.',
    THRESHOLD_GRID_CONSTANT_MESSAGE_THRESHOLD_REQUIRED_LABEL: 'The Threshold Label is required.',

    // XY_PLANE_CONSTANT
    XY_PLANE_TITLE_OPTION_xAxis_izLow: 'Left',
    XY_PLANE_TITLE_OPTION_xAxis_izMiddle: 'Center',
    XY_PLANE_TITLE_OPTION_xAxis_izHigh: 'Right',
    XY_PLANE_TITLE_OPTION_yAxis_izLow: 'Low',
    XY_PLANE_TITLE_OPTION_yAxis_izMiddle: 'Middle',
    XY_PLANE_TITLE_OPTION_yAxis_izHigh: 'High',
    XY_PLANE_LABEL_XAXIS_TYPE: 'xAxis Type',
    XY_PLANE_LABEL_LINEAR: 'Linear',
    XY_PLANE_LABEL_LINEAR_TOOLTIP:
      'The numbers along the axis are of linear scale. Thus, data value returned from query may not be shown on axis',
    XY_PLANE_LABEL_VALUE: 'Value',
    XY_PLANE_LABEL_VALUE_TOOLTIP: 'The data value returned from query will be shown on axis',
    XY_PLANE_LABEL_APPLY_ALL: 'Apply for all numeric/date time fields',

    // REGRESSION LINE
    REGRESSION_LINE_OPTION_LINEAR: 'Linear',
    REGRESSION_LINE_OPTION_POLYNOMIAL: 'Polynomial',
    REGRESSION_LINE_OPTION_LOGARITHMIC: 'Logarithmic',
    REGRESSION_LINE_OPTION_EXPONENTIAL: 'Exponential',
    REGRESSION_LINE_FIELD_SELECT: 'Select a field',
    REGRESSION_LINE_FIELD_SELECT_TOOLTIP:
      'The regression line settings persist for each selected field. Please click "Ok" button to apply the settings to the chart.',
    REGRESSION_LINE_NAME_TOOLTIP:
      'The name as it appears in the legend and tooltip. Use the following replacements:\n%r: Value of correlation coefficient\n%r2: Value of coefficient of determination\n%eq: Regression equation\n%se: Standard error\nDefault: Equation: %eq',
    REGRESSION_LINE_HIDE_IN_LEGEND: 'Hide in legend',
    REGRESSION_LINE_TYPE: 'Regression Type',
    REGRESSION_LINE_ORDER: 'Order',
    REGRESSION_LINE_DECIMAL_PLACES: 'Decimal Places',
    REGRESSION_LINE_EXTRAPOLATE: 'Extrapolate',
    REGRESSION_LINE_EXTRAPOLATE_TOOLTIP: 'The resulting curve will be extended beyond the end of the known data.',
    REGRESSION_LINE_DECIMAL_PLACES_TOOLTIP:
      'Set the number of decimal places for r, r2, se, and coordinate. Default: 2',
    REGRESSION_POLYNOMIAL_ORDER_TWO: 'Polynomial forms a quadratic expression (parabolic curve)',
    REGRESSION_POLYNOMIAL_ORDER_THREE: 'Polynomial forms a cubic expression',
    REGRESSION_POLYNOMIAL_ORDER_FOUR: 'Polynomial forms a quartic expression',
    REGRESSION_LINE_POPUP_WARNING:
      'Regression line doesn’t work with Separator fields. Do you want to remove the Separator fields and apply the regression line?',
    REGRESSION_LINE_REMOVE_WARNING:
      'Regression line is not supported with Separator fields. Do you want to remove the regression line settings and apply the Separators?',

    // SETTINGS_CONTEXT_MENU
    SETTINGS_CONTEXT_MENU_MESSAGE_CONFIRM_MESSAGE_CHANGE_TENANT:
      'The selected system/tenant level does not contain any connection string.',
    SETTINGS_MESSAGE_NO_FIELD_SELECTED: 'Field is not selected',
    SETTINGS_MESSAGE_NO_FUNCTION_SELECTED: 'Function is not selected',
    SETTINGS_MESSAGE_NO_VALUE_SELECTED: 'Value not set',
    SETTINGS_MESSAGE_NAME_HAS_BEEN_DEFINED: 'Name has been already defined for this value',
    SETTINGS_MESSAGE_COLOR_HAS_BEEN_DEFINED: 'Color has been already defined for this value.',
    SETTINGS_MESSAGE_RANGE_COLOR_HAS_BEEN_DEFINED: 'Color has been already defined for this value range.',
    SETTINGS_MESSAGE_PERCENT_COLOR_HAS_BEEN_DEFINED: 'Color has been already defined for this percentage range.',
    SETTINGS_MESSAGE_INVALID_RANGE: 'Invalid range',
    SETTINGS_MESSAGE_FIELD_IS_REQUIRED: 'Field is required',
    SETTINGS_MESSAGE_ALTERNATIVE_TEXT_HAS_BEEN_DEFINED: 'Alternative text has been already defined for this value.',
    SETTINGS_MESSAGE_RANGE_ALTERNATIVE_TEXT_HAS_BEEN_DEFINED:
      'Alternative text has been already defined for this value range.',
    SETTINGS_MESSAGE_PERCENT_ALTERNATIVE_TEXT_HAS_BEEN_DEFINED:
      'Alternative text has been already defined for this percentage range.',
    SETTINGS_LABEL_NONE: 'None',
    SETTINGS_LABEL_VALUE: 'Value',
    SETTINGS_LABEL_ALL_VALUE: 'All Values',
    SETTINGS_LABEL_VALUE_RANGE: 'Value Range',
    SETTINGS_LABEL_PERCENTAGE_RANGE: 'Percentage Range',
    SETTINGS_LABEL_FILTER_VALUE: 'Filter Value',
    SETTINGS_LABEL_USER_DEFINE: 'User Defined Filter Value',
    SETTINGS_LABEL_FILTER_LOOKUP: 'Filter Lookup Key - Value',
    SETTINGS_LABEL_LOOKUP_KEY: 'Lookup Key',
    SETTINGS_LABEL_DISPLAY_VALUE: 'Display Value',

    // USER_SETUP
    USER_SETUP_LABEL_PASSWORD_OPTIONS: 'Configure Password Option',
    USER_SETUP_LABEL_GENERATE_PASSWORD_LINK: 'Generate Password Link',
    USER_SETUP_LABEL_COPY_PASSWORD_LINK: 'Copy Password Link',
    USER_SETUP_LABEL_COPY_PASTE: 'To copy, please use Ctrl + C, to paste, please use Ctrl + V',
    USER_SETUP_LABEL_ADD_USER: 'Add User',
    USER_SETUP_LABEL_USER_ID: 'User ID',
    USER_SETUP_LABEL_SYSTEM_ADMIN: 'System Admin',
    USER_SETUP_LABEL_FIRST_NAME: 'First Name',
    USER_SETUP_LABEL_LAST_NAME: 'Last Name',
    USER_SETUP_LABEL_TIME_ZONE: 'Time Zone',
    USER_SETUP_LABEL_DATA_OFFSET: 'Data Offset',
    USER_SETUP_LABEL_TIMESTAMP_OFFSET: 'Timestamp Offset',
    USER_SETUP_ERROR_ROLE_ASSOCIATION_MESSAGE_HEADER: 'The {0}(s) saved in the following categories/subcategories may no longer be {1} by this user due to the change in their roles’ association.',
    USER_SETUP_ERROR_ROLE_ASSOCIATION_MESSAGE_FOOTER: 'Please correct this before moving forward.',
    // COMPONENT
    COMPONENT_CONTROL_LABEL_ADD_METRIC: 'Add Metric',

    // REPORT_PART_PROPS_GRID_SCHEMA
    REPORT_PART_PROPS_GRID_SCHEMA_LABEL_GRID_STYLE: 'Grid Style',
    REPORT_PART_PROPS_GRID_SCHEMA_LABEL_SEPARATOR_STYLE: 'Separator Style',
    REPORT_PART_PROPS_GRID_SCHEMA_LABEL_GRID_BORDER_SETTINGS: 'Grid Border Settings',
    REPORT_PART_PROPS_GRID_SCHEMA_LABEL_BORDER_SETTINGS: 'Border Settings',
    REPORT_PART_PROPS_GRID_SCHEMA_LABEL_ALTERNATIVE_BACKGROUND: 'Alternative Background',
    REPORT_PART_PROPS_GRID_SCHEMA_LABEL_ALTERNATIVE_BACKGROUND_COLOR: 'Alternative Background Color',
    REPORT_PART_PROPS_GRID_SCHEMA_LABEL_NONE: 'None',
    REPORT_PART_PROPS_GRID_SCHEMA_LABEL_COLUMNS: 'Columns',
    REPORT_PART_PROPS_GRID_SCHEMA_LABEL_ROWS: 'Rows',
    REPORT_PART_PROPS_GRID_SCHEMA_LABEL_COLUMNS_AND_ROWS: 'Columns and Rows',
    REPORT_PART_PROPS_GRID_SCHEMA_LABEL_WIDTH: 'Width',
    REPORT_PART_PROPS_GRID_SCHEMA_LABEL_HEIGHT: 'Height',
    REPORT_PART_PROPS_GRID_SCHEMA_LABEL_HEADERS: 'Headers',
    REPORT_PART_PROPS_GRID_SCHEMA_LABEL_WORD_WRAP: 'Word Wrap',
    REPORT_PART_PROPS_GRID_SCHEMA_LABEL_REMOVE_HEADER_FOR_EXPORT: 'Remove Header For Export',
    REPORT_PART_PROPS_GRID_SCHEMA_LABEL_REMOVE_HEADER_FOR_VIEWER: 'Remove Header For Viewer',
    REPORT_PART_PROPS_GRID_SCHEMA_LABEL_DATA_REFRESH_INTERVAL: 'Data Refresh Interval',
    REPORT_PART_PROPS_GRID_SCHEMA_LABEL_EXPORT_COLUMNS_PER_PAGE: 'No. of Columns Per Exported Page',
    REPORT_PART_PROPS_GRID_SCHEMA_LABEL_EXPORT_COLUMNS_PER_PAGE_DISABLED: 'No. of Columns Per Exported Page is disabled because "Disable Repeat Headers" is turned on',
    REPORT_PART_PROPS_GRID_SCHEMA_LABEL_PAGE_BREAK_AFTER_SEPARATOR: 'Page Break After Separator',
    REPORT_PART_PROPS_GRID_SCHEMA_LABEL_COLLAPSE_DRILLDOWN_BY_DEFAULT: 'Collapse Expanders by Default',
    REPORT_PART_PROPS_GRID_SCHEMA_LABEL_EXPANDER_ROW_SPACING: 'Expander Row Spacing',
    REPORT_PART_PROPS_GRID_SCHEMA_LABEL_DISABLE_REPEAT_HEADERS_INFO: 'This feature shall work when separator values are used in a report part.',

    // REPORT_PART_PROPS_LAYOUT_SCHEMA
    REPORT_PART_PROPS_FORMAT_SCHEMA_LABEL_HEADER: 'Header',
    REPORT_PART_PROPS_FORMAT_SCHEMA_LABEL_FOOTER: 'Footer',
    REPORT_PART_PROPS_FORMAT_SCHEMA_LABEL_PAGE_NUMBER: 'Page Number',
    REPORT_PART_PROPS_FORMAT_SCHEMA_LABEL_REPORT_TITLE: 'Report Title',
    REPORT_PART_PROPS_FORMAT_SCHEMA_LABEL_REPORT_DESCRIPTION: 'Report Description',
    REPORT_PART_PROPS_FORMAT_SCHEMA_LABEL_ENABLE_HEADER: 'Enable Header',
    REPORT_PART_PROPS_FORMAT_SCHEMA_LABEL_ENABLE_FOOTER: 'Enable Footer',
    REPORT_PART_PROPS_FORMAT_SCHEMA_LABEL_CROSS_FILTERING: 'Cross Filtering',


    // CALCULATED_FIELD_PROPERTIES_SCHEMA
    CALCULATED_FIELD_PROPERTIES_SCHEMA_LABEL_FIELD_PROPERTIES: 'FIELD PROPERTIES',
    CALCULATED_FIELD_PROPERTIES_SCHEMA_MESSAGE_FIELD_NAME: 'Field Name is required.',

    // FIELD_PROPERTIES_SCHEMA
    FIELD_PROPERTIES_SCHEMA_LABEL_FIELD_PROPERTIES: 'FIELD PROPERTIES',
    PROPERTIES_EDITOR_MORE_STATE: 'More',
    PROPERTIES_EDITOR_LESS_STATE: 'Less',
    PROPERTIES_EDITOR_REMOVE_SETTING: 'Remove Setting',

    // REPORT_PART_PROPERTIES_CONTAINER
    REPORT_PART_PROPERTIES_CONTAINER_REPORT_PART_PROPERTIES: 'REPORT PART PROPERTIES',

    // CHART_DEFAULT_CONFIG
    CHART_DEFAULT_CONFIG_LABEL_CENTER: 'Center',
    CHART_DEFAULT_CONFIG_LABEL_LEFT: 'Left',
    CHART_DEFAULT_CONFIG_LABEL_RIGHT: 'Right',
    CHART_DEFAULT_CONFIG_LABEL_TOP: 'Top',
    CHART_DEFAULT_CONFIG_LABEL_MIDDLE: 'Middle',
    CHART_DEFAULT_CONFIG_LABEL_BOTTOM: 'Bottom',
    CHART_DEFAULT_CONFIG_LABEL_NORMAL: 'Normal',
    CHART_DEFAULT_CONFIG_LABEL_PERCENTAGE: 'Percentage',

    // FILTER PROPERTIES SCHEMA
    FILTER_PROPERTIES_SCHEMA_LABEL_FILTER_NAME: 'Filter Name',
    FILTER_PROPERTIES_SCHEMA_LABEL_FILTER_SETTINGS: 'Filter Settings',
    FILTER_PROPERTIES_SCHEMA_LABEL_FILTER_ALIAS: 'Filter Alias',
    FILTER_PROPERTIES_MESSAGE_FILTER_ALIAS_VALUE_REQUIRED: 'Filter alias is required.',
    FILTER_PROPERTIES_SCHEMA_LABEL_CASCADING: 'Cascading',
    FILTER_PROPERTIES_SCHEMA_LABEL_SORT: 'Sort',
    FILTER_PROPERTIES_SCHEMA_LABEL_FILTER_OPERATOR: 'Filter Operator',
    FILTER_PROPERTIES_SCHEMA_LABEL_USE_LOOKUP: 'Use Lookup',
    FILTER_PROPERTIES_SCHEMA_LABEL_FILTER_FORMATTING: 'Filter Formatting',

    // FORMAT PROPERTIES
    FORMAT_PROPERTIES_LABEL_ITEM_TYPE: 'Item Type',
    FORMAT_PROPERTIES_LABEL_ITEM_NAME: 'Item Name',
    FORMAT_PROPERTIES_LABEL_ITEM_VALUE: 'Item Value',
    FORMAT_PROPERTIES_MESSAGE_ITEM_VALUE_REQUIRED: 'Item value is required.',
    FORMAT_PROPERTIES_LABEL_IMAGE_URL: 'Image URL',
    FORMAT_PROPERTIES_MESSAGE_IMAGE_URL_REQUIRED: 'Url Image is required.',
    FORMAT_PROPERTIES_LABEL_ITEM_FORMATTING: 'Item Formatting',
    FORMAT_PROPERTIES_LABEL_DEFAULT_IMAGE_BUTTON: 'Use Default Image',
    FORMAT_PROPERTIES_LABEL_APPLY_CROSS_FILTERS: 'Apply',
    FORMAT_PROPERTIES_LABEL_RESET_CROSS_FILTERS: 'Reset',

    //IMAGE_DIMENSIONS
    FORMAT_PROPERTIES_LABEL_IMAGE_DIMENSIONS: 'Dimensions',
    FORMAT_PROPERTIES_LABEL_IS_CONSTRIN_PROPORTIONS: 'Constrain Proportions',

    // EXPORT_CONSTANTS
    EXPORT_CONSTANTS_LABEL_MARGIN_TOP: 'Top',
    EXPORT_CONSTANTS_LABEL_MARGIN_LEFT: 'Left',
    EXPORT_CONSTANTS_LABEL_MARGIN_BOTTOM: 'Bottom',
    EXPORT_CONSTANTS_LABEL_MARGIN_HEADER: 'Header',
    EXPORT_CONSTANTS_LABEL_MARGIN_RIGHT: 'Right',
    EXPORT_CONSTANTS_LABEL_MARGIN_FOOTER: 'Footer',
    EXPORT_CONSTANTS_LABEL_ORIENTATION: 'Orientation',
    EXPORT_CONSTANTS_LABEL_MARGIN: 'Margins',
    EXPORT_CONSTANTS_LABEL_CENTER_ON_PAGE: 'Center on page',
    EXPORT_CONSTANTS_LABEL_HORIZONTALLY: 'Horizontally',
    EXPORT_CONSTANTS_LABEL_VERTICALLY: 'Vertically',
    EXPORT_CONSTANTS_LABEL_PAGE_BREAK: 'Page Break After Report Part',
    EXPORT_CONSTANTS_LABEL_NORMAL: 'Normal',
    EXPORT_CONSTANTS_LABEL_NARROW: 'Narrow',
    EXPORT_CONSTANTS_LABEL_WIDE: 'Wide',
    EXPORT_CONSTANTS_LABEL_CUSTOM: 'Custom',
    EXPORT_CONSTANTS_LABEL_PORTRAINT: 'Portrait',
    EXPORT_CONSTANTS_LABEL_LANDSCAPE: 'Landscape',

    // COLOR DIALOG
    COLOR_DIALOG_LABEL_NEW: 'New',
    COLOR_DIALOG_LABEL_CURRENT: 'Current',
    COLOR_DIALOG_LABEL_TITLE: 'Color Picker',

    // DATA SOURCE - COMPARISION OPTIONS
    COMPARISION_IS_NULL: 'IS NULL',
    COMPARISION_IS_NOT_NULL: 'IS NOT NULL',
    COMPARISION_IS_BLANK: 'IS BLANK',
    COMPARISION_IS_NOT_BLANK: 'IS NOT BLANK',
    COMPARISION_FIELD: 'Field',
    COMPARISION_FILTER: 'Filter',
    COMPARISION_DATE_AND_TIME: 'Date & Time',
    COMPARISION_DATE: 'Date',
    COMPARISION_TIME: 'Time',
    COMPARISION_FILTER_COMPARISON: 'Filter Comparison',
    COMPARISION_FIELD_COMPARISON: 'Field Comparison',
    COMPARISION_VALUE_COMPARISON: 'Value Comparison',
    COMPARISION_BOOLEAN: 'Boolean',

    // NOTIFICATION POPUP MESSAGES
    NOTIFICATION_POPUP_TITLE: 'Notifications',
    NOTIFICATION_POPUP_NO_NOTIFICATIONS_MESSAGE: 'No Notification',
    NOTIFICATION_POPUP_EXPORT_TYPE_TITLE: 'Export Notification',
    NOTIFICATION_POPUP_EXPORT_SUCCESS_MESSAGE_TEMPLATE: '{0} export for {1} has been completed.',
    NOTIFICATION_POPUP_EXPORT_READY_MESSAGE_TEMPLATE: '{0} export for {1} is ready.',
    NOTIFICATION_POPUP_EXPORT_FAILED_MESSAGE_TEMPLATE: '{0} export for {1} is failed.',
    NOTIFICATION_POPUP_MAP_TYPE_TITLE: 'Provision Map Notification',
    NOTIFICATION_POPUP_MAP_STARTED_MESSAGE_TEMPLATE: 'Map provisioning is started.',
    NOTIFICATION_POPUP_MAP_SUCCESS_MESSAGE_TEMPLATE: 'Map provisioning is finished. You should able to design your map reports.',
    NOTIFICATION_POPUP_MAP_ERROR_MESSAGE_TEMPLATE: 'Map provisioning is failed. Please check logs for error.',
    NOTIFICATION_POPUP_RESET_NLQ_ERROR_MESSAGE_TEMPLATE: 'Reset NLQ configuration is failed.',
    NOTIFICATION_POPUP_RESET_NLQ_SUCCESS_MESSAGE_TEMPLATE: 'NLQ configuration reset successfully.',
    NOTIFICATION_POPUP_SAVE_NLQ_REPORT_TYPE_TITLE: 'NLQ Notification',
    NOTIFICATION_POPUP_SAVE_NLQ_REPORT_MESSAGE_TEMPLATE: 'saved successfully.',
    NOTIFICATION_POPUP_CONFIGURE_NLQ_ERROR_MESSAGE_TEMPLATE: 'NLQ Module configuration has been failed',
    NOTIFICATION_POPUP_CONFIGURE_NLQ_SUCCESS_MESSAGE_TEMPLATE: 'NLQ Module Configured Successfully.',
    NOTIFICATION_POPUP_ENCRYPTION_DATA_TYPE_TITLE: 'Provision Encryption Data Notification',
    NOTIFICATION_POPUP_ENCRYPTION_DATA_STARTED_MESSAGE_TEMPLATE: 'Encryption data provisioning is started.',
    NOTIFICATION_POPUP_ENCRYPTION_DATA_SUCCESS_MESSAGE_TEMPLATE: 'Encryption data provisioning is finished.',
    NOTIFICATION_POPUP_ENCRYPTION_DATA_ERROR_MESSAGE_TEMPLATE: 'Encryption data provisioning is failed. Please check logs for error.',
    // NOTIFICATION MESSAGES
    NOTIFICATION_PROVISION_MAP_DATA_IMPORTING:
      'The system is importing Map data into the configuration database. Please wait for the process to complete before using Maps.',
    NOTIFICATION_PROVISION_MAP_DATA_IMPORT_FAILED:
      'The map data provisioning process has failed. The map cannot be drawn at this time. Please re-provision it.',
    NOTIFICATION_PROVISION_ENCRYPTION_DATA_MESSAGE:
      'The system will upgrade your license key to 256-bit encryption. Please wait for the process to complete. After the upgrade is finished, you will need to log in to the system.',

    // NOTIFICATION MESSAGES FOR NLQ Configuration
    NLQ_MODULE_CONFIGURED: 'NLQ Module Configured Successfully',
    NLQ_MODULE_CONFIGURATION_FAILED: 'NLQ Module configuration has been failed',

    //NOTIFICATION NLQ SAVE REPORT
    NOTIFICATION_NLQ_SAVE_REPORT:
      'saved successfully',
    NOTIFICATION_NLQ_SAVE_REPORT_FAILED:
      'saving failed ',
    // NOTIFICATION MESSAGES FOR NLQ RESET
    NLQ_RESET_SUCCESS: 'NLQ configuration reset successfully',
    NLQ_RESET_FAILED: 'NLQ configuration reset failed',
    // IMPORT
    IMPORT_BROWSE: 'Browse Files',
    IMPORT_THE_SOURCE_ACCESS_RIGHT: 'Import the source access rights',
    IMPORT_THE_SOURCE_CATEGORY_SUBCATEGORY: 'Import the source category/subcategory',
    IMPORT_THE_FILTER_VALUES: 'Import the filter values',
    INSTRUCTION_BROWSE_FILES:
      'Click "Browse Files" to import your .birt (Report Definition) or .bidb (Dashboard Definition) files.',

    IMPORT_ERROR_MESSAGE:
      'The system cannot import any definition files that are from a newer version than {0}, or any files with an invalid structure. These items will not be loaded into the grid.',
    IMPORT_LABEL_DRAG_AND_DROP_FILES: 'Drag and drop files here to upload',
    IMPORT_LABEL_VALIDATION_ERRORS_FILES: 'Validation Errors - These files will not be available:',
    IMPORT_LABEL_INVALID_FILE_FORMAT: 'Invalid File Format',

    IMPORT_DELETE_MESSAGE: 'Are you sure you want to delete {0} file?',
    IMPORT_DELETE_SELECTED_MESSAGE: 'Are you sure you want to delete selected files?',

    // IMPORT TOOLTIP DEFINITIONS
    TOOLTIP_IMPORT_THE_SOURCE_ACCESS_RIGHT:
      'When enabled, any sharing rights for "Everyone" and roles which exist in this location will be imported. If not, the selected access rights will not import and if you are importing a report again, the current access rights will not be altered.',
    TOOLTIP_IMPORT_THE_FILTER_VALUES:
      'If this option is checked, any filter values will be imported. If not selected, the filter values will not be imported, and if you are importing a report again, the current filter values will not be altered',
    TOOLTIP_IMPORT_THE_SOURCE_CATEGORY_SUBCATEGORY:
      'If this option is checked, the system uses the same category/subcategory name that the report was exported from.',

    // IMPORT SOURCE TYPE
    IMPORT_CONSTANTS_SOURCE_TYPE_FILENAME: 'File Name',
    IMPORT_CONSTANTS_SOURCE_TYPE_TYPE: 'Type',
    IMPORT_CONSTANTS_SOURCE_TYPE_NEW_REPORT_NAME: 'New Report Name (*)',
    IMPORT_CONSTANTS_SOURCE_TYPE_NEW_REPORT_OR_DASHBOARD_NAME: 'New Report/Dashboard Name (*)',
    IMPORT_CONSTANTS_SOURCE_TYPE_SAVE_AS: 'Save As',
    IMPORT_CONSTANTS_SOURCE_TYPE_SAVE_INTO: 'Save Into',
    IMPORT_CONSTANTS_SOURCE_TYPE_CATEGORY: 'Category',
    IMPORT_CONSTANTS_SOURCE_TYPE_SUB_CATEGORY: 'Sub-Category',
    IMPORT_CONSTANTS_SOURCE_TYPE_IMPORTED_DATE: 'Imported Date',
    IMPORT_CONSTANTS_SOURCE_TYPE_IMPORTER: 'Importer',
    IMPORT_CONSTANTS_SOURCE_TYPE_IMPORT_STATUS: 'Import Status',
    IMPORT_CONSTANTS_SOURCE_TYPE_FAILURE_ERROR: 'Failure Error',
    IMPORT_CONSTANTS_SOURCE_TYPE_REPORT_OR_DASHBOARD_NAME: 'Report/Dashboard Name',

    // MAPPING ERROR POPUP
    IMPORT_MAPPING_ERROR_POPUP_TITLE: 'Mapping Error',
    IMPORT_MAPPING_ERROR_INCONSISTENT_DATA:
      'Below reports/dashboards have inconsistent data between source and destination.',
    IMPORT_MAPPING_ERROR_GUIDES: 'Please correct the database mappings or remove the inconsistent reports/dashboards.',
    IMPORT_CONFORM_REMOVE_ALL_FILE:
      'Are you sure you want to leave this page? Any files uploaded from this page will be deleted.',
    IMPORT_MAPPING_ERROR_OBJECT_LOCATION: 'in the file',

    // IMPORT POPUP
    REPORT_DETAILS_AND_MAPPINGS: 'Report Details and Mappings',

    // IMPORT OVERWRITE CONFIRMATION POPUP:
    IMPORT_OVERWRITE_CONFIMATION_POPUP_TITLE: 'Import Reports/Dashboards - Overwrite Confirmation',
    IMPORT_OVERWRITE_CONFIMATION_POPUP_TOOLTIP:
      'The reports inside the dashboard are not listed here as they will be overwritten if they exist in the destination when you select the dashboard to overwrite',
    IMPORT_OVERWRITE_CONFIMATION_POPUP_DESCRIPTION:
      'Below reports/dashboards are currently existing in destination.\nPlease select the reports/dashboards you want to overwrite in destination.',

    // IMPORT PROGRESS POPUP
    IMPORT_PROGRESS_POPUP_TITLE: 'Import Progress...',
    IMPORT_PROGRESS_POPUP_CANCEL_IMPORT: 'Cancel the Import',
    IMPORT_STATUS_NOT_PROCESSED: 'Waiting to be processed',
    IMPORT_STATUS_SUCCESS: 'Completed',
    IMPORT_STATUS_FAILED: 'Failed',

    // REPORT INFORMATION
    IMPORT_REPORT_INFORMATION: 'Report Information',
    IMPORT_DASHBOARD_INFORMATION: 'Dashboard Information',
    IMPORT_TEMPLATE_INFORMATION: 'Template Information',
    IMPORT_DATA_INFORMATION: 'Data Information',
    IMPORT_SETTING_LEVEL: 'Setting Level',
    IMPORT_DATABASES: 'Databases',
    IMPORT_DATA_SOURCES: 'Data Sources',
    IMPORT_CUSTOM_VIEWS: 'Custom Views',
    IMPORT_CALCULATED_FIELDS: 'Data Model Calculated Fields',

    // IMPORT DATA MODEL
    IMPORT_DATAMODEL_MESSAGE_IMPORT_PROCESS_DONE: 'The import process is complete',
    IMPORT_DATAMODEL_MESSAGE_STATUS_READY_TO_IMPORT: 'Ready to import',
    IMPORT_DATAMODEL_LABEL_SELECTED_FILE: 'Data Model File:',
    IMPORT_DATAMODEL_LABEL_ADVANCED_OPTIONS: 'Data Model Import Advanced Options:',
    IMPORT_DATAMODEL_LABEL_TABLE_CONNECTION: 'Connection',
    IMPORT_DATAMODEL_LABEL_TABLE_SCHEMA: 'Schema',
    IMPORT_DATAMODEL_LABEL_OVERWRITE_NOTIFICATION: 'Import Data Model - Overwrite notification',
    IMPORT_DATAMODEL_MESSAGE_OVERWRITE_NOTIFICATION: 'The following data sources will be overwritten. Do you actually want to import the data model?',

    // DATABASE MAPPING
    // BUTTONS LABEL
    DATABASE_MAPPING: 'Database Mapping',
    DATABASE_MAPPING_COPY_MAPPINGS: 'Copy Mappings',
    DATABASE_MAPPING_PASTE_MAPPINGS: 'Paste Mappings',
    DATABASE_MAPPING_ADD_MAPPING: 'Add Mapping',

    // GRID
    DATABASE_MAPPING_FROM: 'From',
    DATABASE_MAPPING_TO: 'To',
    DATABASE_MAPPING_PHYSICAL_DATABASE: 'Physical Database',
    DATABASE_MAPPING_DATABASE_NAME: 'Database Name',
    DATABASE_MAPPING_SCHEMA: 'Schema',
    DATABASE_MAPPING_ACTION: '',

    // GRID POPUP
    GRID_POPUP_TOOLTIP: 'Please click on this icon to see the grid view of current chart data.',
    GRID_POPUP_LABEL_POSITION_LEFT: 'Left',
    GRID_POPUP_LABEL_POSITION_RIGHT: 'Right',
    // COLOR THEME
    COLORTHEME_OPTION_TOOLTIP: 'Color Theme Selection',
    COLORTHEME_POPUP_HEADER: 'Color Theme Selection',
    COLORTHEME_POPUP_HEADER_DEFAULT: 'Default Color Theme Selection',
    COLORPALETTE_NODEFAULT: 'No Default',
    COLORPALETTE_DEFAULT: 'default',
    COLORPALETTE_NOTHEME: 'No Theme',

    // THRESHOLD SETTINGS
    THREHOSLD_X_LABEL: 'Apply static threshold on X-Axis',
    THREHOSLD_Y_LABEL: 'Apply threshold on Y-Axis',
    THRESHOLDS_TITLE_POPUP_CHANGE_FIELD: 'Change field or alter function',

    //CONDITIONAL FORMATTING SETTINGS
    CONDITIONAL_FORMATTING_LABEL_EDIT_CONDITION: 'Edit Condition',
    CONDITIONAL_FORMATTING_LABEL_EDIT_FORMAT: 'Edit Format',
    CONDITIONAL_FORMATTING_LABEL_EDIT_FIELDS: 'Edit Fields',
    CONDITIONAL_FORMATTING_LABEL_ADD_RULE: 'Add Rule',
    CONDITIONAL_FORMATTING_LABEL_CLONE_RULE: 'Clone Rule',
    CONDITIONAL_FORMATTING_LABEL_DELETE_RULE: 'Delete Rule',
    CONDITIONAL_FORMATTING_LABEL_CONDITION_FIELD: 'Field',
    CONDITIONAL_FORMATTING_LABEL_CONDITION_TYPE: 'Type',
    CONDITIONAL_FORMATTING_LABEL_CONDITION_VALUE: 'Value',
    CONDITIONAL_FORMATTING_LABEL_FORMAT_TYPE: 'Type',
    CONDITIONAL_FORMATTING_LABEL_FORMAT_VALUE: 'Value',
    CONDITIONAL_FORMATTING_LABEL_SELECT_ALL_FIELDS: 'Select All',
    CONDITIONAL_FORMATTING_LABEL_RESET_ALL_FIELDS: 'Reset All',
    CONDITIONAL_FORMATTING_LABEL_NOT_SELECTED: 'Not selected',
    CONDITIONAL_FORMATTING_LABEL_MORE: 'More',
    CONDITIONAL_FORMATTING_TABEL_CONDITION_COL: 'Condition',
    CONDITIONAL_FORMATTING_TABEL_FIELDS_COL: 'Apply to Fields',
    CONDITIONAL_FORMATTING_TABEL_FORMAT_COL: 'Format',
    CONDITIONAL_FORMATTING_CONDITION_POPUP_TITLE: 'Condition',
    CONDITIONAL_FORMATTING_FIELDS_POPUP_TITLE: 'Apply to Fields',
    CONDITIONAL_FORMATTING_ADDITIONAL_CONDITIONS_APPLY_TO_SIDE_TOTAL: 'Apply to Side Total',
    CONDITIONAL_FORMATTING_FORMAT_POPUP_TITLE: 'Format',
    CONDITIONAL_FORMATTING_ADDITIONAL_CONDITIONS_POPUP_TITLE: 'Additional Conditions',

    //NLQ SAVE POPUP
    NLQ_SAVE_POPUP_CHOOSE_LABEL: 'Choose how you want to save your data',
    NLQ_SAVE_POPUP_ADD_TITLE: 'Add a title',
    NLQ_SAVE_POPUP_REPORT_TITLE: 'Report title',
    NLQ_SAVE_POPUP_DASHBOARD_TITLE: 'Dashboard title',
    NLQ_SAVE_POPUP_SAVE_TO: 'Save to',
    NLQ_SAVE_POPUP_ADD_NEW_CATEGORY: 'Add New Category',
    NLQ_SAVE_POPUP_CREATE_NEW_REPORT: ' Create New Report ',
    NLQ_SAVE_POPUP_CREATE_NEW_DASHBOARD: ' Create New DashBoard ',
    NLQ_MODAL_REPORT_ALREADY_CREATED_MSG: 'You have already saved your report',
    NLQ_SAVE_POPUP_DUPLICATE_REPORT_MSG: 'Report name already available',
    NLQ_MODAL_REPORT_NAME_MANDATORY: 'Report Name is required.',
    NLQ_MODAL_DASHBOARD_NAME_MANDATORY: 'Dashboard Name is required.',
    NLQ_MODAL_DASHBOARD_DUPLICATE_NAME_MSG: 'Dashboard Name is already available.',
    NLQ_MODAL_DASHBOARD_ALREADY_CREATED_MSG: 'You have already saved your dashboard',
    NLQ_SAVE_POPUP_BLANK_CATEGORY_MSG: 'Category name can not be blank',
    NLQ_SAVE_POPUP_DUPLICATE_CATEGORY_MSG: 'Category name already available',
    NLQ_SAVE_POPUP_ADD_REPORT_NAME: 'Add Report Name',
    NLQ_SAVE_POPUP_ADD_TEMPLATE_NAME: 'Add Template Name',
    NLQ_SAVE_POPUP_ADD_REPORT_TITLE: 'Add Report Title',
    NLQ_SAVE_ADVANCED_OPTIONS: 'Advanced Options',
    NLQ_SAVE_SELECT_SUBCATEGORY: 'Select Category',



    /** IZENDA BETA **/

    // COMMON LABELS
    COMMON_CREATE_NEW_REPORT: 'Create a New Report',
    COMMON_LABEL_INFORMATION: 'Information',
    COMMON_TAB_VISUALS: 'Visuals',
    COMMON_TAB_STYLING: 'Styling',
    COMMON_LABEL_SAVE_CHANGES: 'Save Changes',
    COMMON_TAB_FORMATS: 'Formats',
    COMMON_TAB_FILTERS: 'Filters',
    COMMON_TAB_FIELDS: 'Fields',

    // CREATE NAVIGATION
    CREATE_M1: 'Report Part Designer',
    CREATE_M2: 'Layout Designer',
    CREATE_M3: 'Permissions and Sharing',

    // CREATE SUB NAVIGATION
    CREATE_M1S1: 'Select Your Data',
    CREATE_M1S2: 'Configure Your Data',
    CREATE_M1S3: 'Apply Visualization',
    CREATE_M2S1: 'Layout Designer',
    CREATE_M3S1: 'Permissions and Sharing',

    // REPORT PART RAIL
    REPORT_PART_RAIL: 'Report Parts',
    REPORT_PART_RAIL_REDIRECT_MODAL_TITLE: 'Redirect',
    REPORT_PART_RAIL_REDIRECT_MODAL_BODY: 'You will be redirected to choose your data sources for the new report part',
    REPORT_PART_RAIL_LAST_FIELD_MODAL_TITLE: 'Attention',
    REPORT_PART_RAIL_LAST_FIELD_MODAL_BODY: 'By deleting this field you will be returned to the first step to select your data. Do you wish to continue?',

    // REPORT PART
    REPORT_PART_REMOVE_CONFIRMATION_TITLE: 'Deleting a report part',
    REPORT_PART_REMOVE_CONFIRMATION_BODY: 'Are you sure you want to remove report part?',
    REPORT_PART_RENAME_ERROR_TITLE: 'Invalid name',
    REPORT_PART_RENAME_ERROR_BODY: 'The name is empty or already in use. Try another name.',
    REPORT_PART_PLACEHOLDER: 'Select fields to form report part',

    // DATA SOURCE SELECTOR
    DATA_SOURCE_CATEGORY: 'Category',
    DATA_SOURCE_ADD_NEW_DATABASE: 'Add New Database',
    DATA_SOURCE_ADD_NEW_RELATIONSHIP: 'Add New Relationship',
    DATA_SOURCE_MODIFY_RELATIONSHIP: 'Modify Relationship',
    DATA_SOURCE_NOT_SORTABLE_FIELDS_MESSAGE: 'The report uses aggregate functions so you can not add non-aggregable data type (XML, JSON, Image, Lob) fields: {0}',

    ADD_NEW_DATABASE_POPUP_TEXT: 'You must leave the report designer to add new data sources, and any unsaved changes may be lost. Do you want to proceed?',

    FIELD_PROPERTIES_SCHEMA_LABEL: 'Properties',
    FIELD_PROPERTIES_SCHEMA_LABEL_FILTERS: 'Filters',

    // BETA FONT SETTINGS POPUP
    FONT_SETTINGS_LABEL_FONT_FORMATING: 'Font Formatting',
    FONT_SETTINGS_LABEL_TEXT_ALIGNMENT: 'Text Alignment',
    FONT_SETTINGS_LABEL_TEXT_JUSTIFICATION: 'Text Justification',

    // LAYOUT DESIGNER SIZES
    REPORT_CREATOR_LAYOUT_SIZE_SMALL: 'Small',
    REPORT_CREATOR_LAYOUT_SIZE_SMALL_WIDE: 'Small Wide',
    REPORT_CREATOR_LAYOUT_SIZE_MEDIUM: 'Medium',
    REPORT_CREATOR_LAYOUT_SIZE_MEDIUM_WIDE: 'Medium Wide',
    REPORT_CREATOR_LAYOUT_SIZE_LARGE: 'Large',
    REPORT_CREATOR_LAYOUT_SIZE_LARGE_WIDE: 'Large Wide',
    REPORT_CREATOR_LAYOUT_SIZE_MOBILE_SHORT: 'Short',
    REPORT_CREATOR_LAYOUT_SIZE_MOBILE_MEDIUM: 'Medium',
    REPORT_CREATOR_LAYOUT_SIZE_MOBILE_TALL: 'Tall',

    REPORT_CREATOR_EMPTY_LAYOUT_WARNING: 'No layout has been created for this report and it may appear empty in the viewer. Do you want to proceed?',
    REPORT_CREATOR_EMPTY_LAYOUT_MESSAGE: 'No layout has been created for this report. Please navigate to the Layout Designer and configure this report\'s content.',
    REPORT_CREATOR_EMPTY_LAYOUT_MESSAGE_VIEWONLY: 'The report creator has not configured a layout for this report. Please contact your administrator for more information.',

    // PREVIEW MODE
    PREVIEW_MODE_LABEL_DESIGNER: 'Designer',
    PREVIEW_MODE_COMMON_TAB_WEB: 'Web',
    PREVIEW_MODE_LABEL_FILTERS: 'Applied Filter Values',
    PREVIEW_MODE_LABEL_APPLY_FILTERS: 'Apply Filters',
    PREVIEW_MODE_LABEL_EDIT_FILTERS: 'Edit Filters',
    PREVIEW_MODE_LABEL_EDIT_FILTERS_WARNING: 'Filters were changed. Apply filters to refresh data.',
    PREVIEW_MODE_LABEL_FILTERS_PANEL: 'Filters',
    PREVIEW_MODE_LABEL_FILTERS_RAIL_POSITION: 'Filters Rail Position',
    PREVIEW_MODE_LABEL_FILTERS_RAIL_POSITION_LEFT: 'Left',
    PREVIEW_MODE_LABEL_FILTERS_RAIL_POSITION_RIGHT: 'Right',

    REPORT_CREATOR_LAYOUT_WEB_TITLE: 'Web Layout',
    REPORT_CREATOR_LAYOUT_PRINT_TITLE: 'Print Layout',
    REPORT_CREATOR_LAYOUT_MOBILE_TITLE: 'Mobile Layout',
    REPORT_CREATOR_LAYOUT_DELETE_CONFIRMATION: 'Are you sure you want to delete the layout?',
    REPORT_CREATOR_LAYOUT_ORIENTATION: 'Orientation',
    REPORT_CREATOR_LAYOUT_MARGINS: 'Margins',
    PEPORT_CREATOR_LAYOUT_MESSAGE_EXIST: 'Report layout with name "{0}" already exist.',
    PEPORT_CREATOR_LAYOUT_MESSAGE_MARGIN: 'Margin value should be a positive number within range [0in, 2in]',
    REPORT_DISPLAYER_CHOOSE_LAYOUT: 'Choose print layout',

    // FILTERS
    FILTER_POPUP_TITLE: 'Modify Filters',
    FILTER_RESET_BUTTON: 'Reset All',
    FILTER_SELECTED_FIELDS_LABEL: 'Selected Fields',
    FILTER_AVAILABLE_FIELDS_LABEL: 'Available Fields',
    FILTER_VALUE_LABEL: 'Filter Value',
    FILTER_AUTOCOMPLETE_LABEL: 'Autocomplete',
    FILTER_FIELD_COMPARISON_LABEL: 'Field Comparison',
    FILTER_ENABLE_END_USER_FILTER_MODIFICATION_LABEL: 'Enable End User Filter[s] Modification',
    FILTER_ENABLE_END_USER_FILTER_MODIFICATION_TOOLTIP: 'This setting will allow report viewers to add filters to the report while they view it.',
    FILTER_NO_SELECTED_FIELDS_TEXT: 'Select a field from list',
    FILTER_NO_FILTER_SELECTED_TEXT: 'No filter selected.',
    FILTER_TYPE_CHOOSE_LABEL: 'Choose Filter Type',
    FILTER_OPTIONS: 'Filter Options',
    FILTER_OPTIONS_ALIAS: 'Filter Alias',
    FILTER_OPTIONS_VISIBLE: 'Filter Visible',
    FILTER_OPTIONS_VISBLE_TOOLTIP: 'This filter will be visible in the report viewer for all users.',
    FILTER_USER_OPTIONS: 'User Interaction Options',
    FILTER_USER_OPTIONS_TYPEAHEAD_LABEL: 'Typeahead',
    FILTER_USER_OPTIONS_CHECKBOXES_LABEL: 'Checkboxes',
    FILTER_OPERATOR_CHOOSE_LABEL: 'Choose Filter Operator',
    FILTER_TYPE_EQUALS: 'Equals',
    FILTER_TYPE_NOT_EQUALS: 'Not Equals',
    FILTER_TYPE_COMPARE: 'Compare',
    FILTER_TYPE_TEXT: 'Text',
    FILTER_TYPE_BOOLEAN: 'Boolean',
    FILTER_TYPE_DATETIME: 'Date & Time',
    FILTER_TYPE_DATE: 'Date',
    FILTER_TYPE_TIME: 'Time',

    // PERMISSION SHARING
    PERMISSION_SHARING_LABEL_PERMISSION: 'Permission',
    PERMISSION_SHARING_LABEL_SHARE_SCHEDULE: 'Share & Schedule',
    PERMISSION_SHARING_LABEL_EMAIL: 'Email',
    PERMISSION_SHARING_LABEL_EMAIL_HEADER: 'Send email',
    PERMISSION_SHARING_ALLOW_MEMBERS: 'Allow members to Connect and Control your Report',
    PERMISSION_SHARING_GRANT_PERMISSION: 'Grant permission',
    PERMISSION_SHARING_SELECT_ROLE: 'Select role',
    PERMISSION_SHARING_SELECT_USER: 'Select user',
    PERMISSION_SHARING_ACCESS_RIGHTS: 'Access rights',
    PERMISSION_SHARING_REPORT_NAME: 'Report Name:',
    PERMISSION_SHARING_GRANT_PERMISSION_WITH: 'Grant permission with',
    PERMISSION_SHARING_COMMON_LABEL_OWNER: 'Report Owner:',
    PERMISSION_SHARING_LABEL_OWNER: 'Owner:',
    PERMISSION_SHARING_PERMISSION_POPUP_BODY: 'Are you sure you want to delete selected permissions?',
    PERMISSION_SHARING_SHARING_POPUP_BODY: 'Are you sure you want to delete selected scheduled item?',
    PERMISSION_SHARING_DESC: '{0} sent as {1}{2} {3} at {4} / {5} / {6}',
    PERMISSION_SHARING_SELECT_TENANT: 'Select tenant',

    //EDITABLE PERMISSION LIST
    PERMISSION_EDITABLE_LIST_USER_ERROR_MESSAGE :'Please add one or more user to save changes. If you wish to delete all users, please select cancel and use the trash can icon to delete the item.',
    PERMISSION_EDITABLE_LIST_ROLE_ERROR_MESSAGE :'Please add one or more role to save changes. If you wish to delete all roles, please select cancel and use the trash can icon to delete the item.',
    PERMISSION_EDITABLE_LIST_TENANT_ERROR_MESSAGE :'Please add one or more tenant to save changes. If you wish to delete all tenants, please select cancel and use the trash can icon to delete the item.',

    // SHARING SCHEDULE
    SHARING_SCHEDULE_REMOVE: 'Remove Recurring as Schedule',
    SHARING_SCHEDULE: 'Schedule as Recurring',
    SHARING_SCHEDULE_REPORT_ITEM: 'Reporting Item',
    SHARING_SCHEDULE_ALERT: 'Alert',
    SHARING_SCHEDULE_ADD_RECIPIENT: 'Add Recipient',
    SHARING_SCHEDULE_DATE: 'Starting Date',
    SHARING_SCHEDULE_TIME: 'Starting Time',
    SHARING_SCHEDULE_PERIOD: 'Period',
    SHARING_SCHEDULE_TIMEZONE: 'Timezone',
    SHARING_SCHEDULE_SELECT_VALUE: 'Select Value',
    SHARE_YOUR_REPORT_EXTERNALLY: 'Share your report externally',
    SHARE_POPUP_SAVE_REPORT_TEXT_ERROR: 'Emails can only be sent for reports that have been previously saved. Please save your report and try again',
    SHARE_POPUP_EMAIL_SUCCESS: 'Your email(s) have been successfully sent',
    SHARE_POPUP_EMAIL_ERROR_TITLE: 'There was an error sending your email.',
    SHARE_POPUP_EMAIL_ERROR_TEXT: 'There are unsaved changes in the report. Please save before sending.',
    SHARING_SCHEDULE_RECIPIENTS_ERROR: 'Please add one or more recipients to save changes',

    // ADVANCED EMAILING OPTIONS
    ADVANCED_EMAILING_OPTIONS: 'Advanced Emailing Options',
    HIDE_ADVANCED_EMAILING_OPTIONS: 'Hide Advanced Emailing Options',
    // FILTER VALUE SELECTION
    FILTER_VALUE_SELECTION: 'Filter Value Selection',
    HIDE_FILTER_VALUE_SELECTION: 'Hide Filter Value Selection',

    //MY PROFILE SETTINGS
    My_PROFILE_PREFERENCE: 'My Preference',
    My_PROFILE_SECURITY_OPTIONS: 'Security Options',
    My_PROFILE_EXPORT_MANAGER: 'Export Manager',

    // LAYOUT HEADER AND FOOTER
    LAYOUT_HEADER_TITLE_MAX_LENGHT_EXCEEDED: 'Maximum length of Report Title is 120 characters',
    LAYOUT_HEADER_DESCRIPTION_MAX_LENGHT_EXCEEDED: 'Maximum length of Report Description is 240 characters',
    LAYOUT_FOOTER_TEXT_MAX_LENGHT_EXCEEDED: 'Maximum length of Footer Text is 120 characters',

    //CHARTYAXISMETRICSCONTAINER
    ADD_NEW_METRICS: 'Add New Metrics'
  },
  'en-US'
);
