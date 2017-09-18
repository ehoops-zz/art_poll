API:

```
GET vn.com/api/polls/:poll_id/entries?page=:num&page_size=:size
```
Example JSON response.
```
[
  {
    "entry_uuid": "125b1c6b-1d3a-4acd-849a-7eaf7ff5271f",
    "image": "https://d2ie288hwu80n0.cloudfront.net/works/4385/image_rendered_thumb-2016-04-05-pGwY2ZlWdn_FGMArfXb8npyRT7HY1suAGvMll1qie3Jk9nPWfsj4vvLS2o-j2caXud--lNo3CvygOLKc.jpg",
    "artist": "Nell Waters Bernegger",
    "title": "Song"
  },
  {
    "entry_uuid": "8621b231-a78e-4fe5-93ba-b6be8b5fcfe9",
    "image": "https://d2ie288hwu80n0.cloudfront.net/2017/06/04/06/35/45/742/file",
    "artist": "Lauren Rogoff",
    "title": "Rose Breasted Cockatoo Watercolor"
  },
  {
    "entry_uuid": "4f6d51a4-4ec0-4a3c-b7c3-50eb414a819c",
    "image": "https://d2ie288hwu80n0.cloudfront.net/2017/04/17/22/31/36/359/file",
    "artist": "Mouni Feddag",
    "title": "Breakfast table"
  },
  {
    "entry_uuid": "26c8ee91-a6a3-4ebd-b8d7-f3684549a513",
    "image": "https://d2ie288hwu80n0.cloudfront.net/works/6019/big-thumb-2016-12-15-Hs_eoJVohlGp8zNWnRBlyDDz8YSF1ij_nsutxDcagmU3SsOR6KNAe2MahfK2l9-ONRIeV51P92_2DOmz.jpg",
    "artist": "Courtney Cerruti",
    "title": "Botanical 2"
  },
  {
    "entry_uuid": "dc0d4e3a-17ca-457e-9ae0-31a21248e6b0",
    "image": "https://d2ie288hwu80n0.cloudfront.net/work_pictures/large/7162/p100-f-386196-1500380960.jpeg",
    "artist": "C.A. Price",
    "title": "KT's Krawatte"
  }
]
```

```
POST vn.com/api/polls/:poll_id/vote
```
Body JSON
```
{
	"entry_uuid": "<uuid>",
	"rating": "<rating>"
}
```