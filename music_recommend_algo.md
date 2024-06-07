# music recommendation algorithm
> implementaion -> `float`

## user flavor

```
{
count n //songs played
popular n //songs published in a month played
age {} //played times of every decade
genre {} //played times of every genre
singer {} //played times
//for annual stats
history {} //timestamps of every play button clicked
}
```

## try

```
20% popular (in a month)
40% popular (in a year)
10% popular (in 10 years)
10% classic (10 years before)
20% classic (20 years before)
```

## love

```
100% following new song
50% following popular songs
50% genres popular songs
50% age golden songs
```

## pages

```
//recommend
80% love
20% try
```

```
//discover
50% love
50% try
```











