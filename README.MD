# Personal Trainer



##Comands


###Typings

```
typings search create-error
```


```
typings install dt~create-error --global --save
```

###Migrate


```
knex migrate:make personal-trainer
```

```
knex migrate:latest --env development
```

### GIT
#### Remove after commit
```
git rm --cached -r app/*.js
```
