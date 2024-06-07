# markup 0.1

sth like this

```
.abc #2{
  .bcd #1{
    button @=alert(1)
  }
  input .fly{
  }
}
```

```
{
  t "div" //tag
  a { //attributes
    class "abc"
    id "2"
  }
  i [ //inner
    {
      t "div"
      a {
        class "bcd"
        id "1"
      }
      i [
        {
          t "button"
          a {
            onclick "alert(1)"
          }
        }
      ]
    }
    {
      t "input"
      a {
        class "fly"
      }
    }
  ]
}
```

```
<div class="abc" id="2">
  <div class="bcd" id="1">
    <button onclick="alert(1)">
  </div>
  <input class="fly">
  </div>
</div>
```
