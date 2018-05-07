https://github.com/ember-decorators/ember-decorators/issues/223

env:
```
ember -v
ember-cli: 3.1.4
node: 9.11.1
os: linux x64
```
(do not expect this to matter, but the OS is Linux subsystem in Win 10)

steps:
```
ember new 
```
decorators-unexpected-character
ember install ember-decorators
ember g component c-foobar
```

error:

```
ember build

decorators-unexpected-character/app/components/c-foobar.js
  8:1  error  Parsing error: Unexpected character '@'

✖ 1 problem (1 error, 0 warnings)
```
