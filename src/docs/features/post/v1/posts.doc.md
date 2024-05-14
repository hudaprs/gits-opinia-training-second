### 1. GET _/api/v1/posts_ - Get posts list

---

Headers

```json
{
	"Content-Type": "application/json"
}
```

Query Params:

```json
{
	"page": "number",
	"search": "string"
}
```

Response:

```json
{
	"message": "Get posts list success",
	"result": {
		"pagination": {
			"currentPage": "number",
			"lastPage": "number",
			"previousPage": "number",
			"totalData": "number",
			"totalPage": "number"
		},
		"data": [
			{
				"id": "number",
				"title": "string",
				"description": "string",
				"image": "string"
			}
		]
	}
}
```

### 2. POST _/api/v1/posts_ - Create Post

---

Headers

```json
{
	"Content-Type": "application/json"
}
```

Request Body:

**Notes: for `image` need hit to upload image endpoint.**

```json
{
	"name": "string",
	"description": "string",
	"image": "string"
}
```

Response:

```json
{
	"message": "Create post success",
	"result": {
		"id": "number",
		"title": "string",
		"description": "string",
		"image": "string"
	}
}
```

### 3. GET _/api/v1/posts/:id_ - Detail Post

---

Headers

```json
{
	"Content-Type": "application/json"
}
```

Params:

```json
{
	"id": "number"
}
```

Response:

```json
{
	"message": "Get post detail success",
	"result": {
		"id": "number",
		"title": "string",
		"description": "string",
		"image": "string"
	}
}
```

### 4. PATCH _/api/v1/posts/:id_ - Update Post

---

Headers

```json
{
	"Content-Type": "application/json"
}
```

Params

```json
{
	"id": "number"
}
```

Request Body:

```json
{
	"name": "string",
	"description": "string",
	"image": "string"
}
```

Response:

```json
{
	"message": "Update post success",
	"result": {
		"id": "number",
		"title": "string",
		"description": "string",
		"image": "string"
	}
}
```

### 5. DELETE _/api/v1/posts/:id_ - Delete Post

---

Headers

```json
{
	"Content-Type": "application/json"
}
```

Params

```json
{
	"id": "number"
}
```

Response

```json
{
	"message": "Delete post success",
	"result": {
		"id": "number",
		"title": "string",
		"description": "string",
		"image": "string"
	}
}
```
