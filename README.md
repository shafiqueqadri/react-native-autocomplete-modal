
***To get started:***

Install ***Native Base*** at first.

    npm install native-base --save

Then install ***autocomplete*** module

    npm i react-native-autocomplete-modal --save

## Import

 
Import module in your project like,

    import AutoComplete from "react-native-autocomplete-modal";
    
## HeadingUsage

	const countries = [
		{name: "Pakistan"},
		{name: "Turkey"}
	]
    <AutoComplete
        onSelect={data => console.log(data)}
        dataSource={countries}
        textLabel="Select Country"
        searchPlaceholder='Search Country'
        cancelText="Close"
        textColor="white"
    />


    
| Props | Required  | Type | Description |
|--|--|--|--|
| dataSource | Yes | Array | You can put either array of string, integer or object
| searchField | No | String | If array contains strings or integers then `searchField `is not required else you have to put string like `user.county.name `as a string
|style| No | Object | Styling for Button
|textColor | No | String | Like blue, #FFF
|textLabel | No | String | Like **Select option or Choose one**
|value|No|String|Selected value can be set
|searchPlaceholder| No | String | Like **Search country**
| cancelText | No | String | Like **Cancel**
