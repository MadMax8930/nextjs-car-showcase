## Car Showcase Hub
Next.js 13 app under Node v16.13.2

### Goals & Functionalities:

- Next.js Server Side Rendering feature
- Organized file & folder structure
- Application routes implementation
- Search & Filtering capabilities
- Data display in chunks
- Combobox & Modal elements
- Transitioning from CSR to SSR
- Optimizing metadata & SEO
- Mobile responsiveness

### Tech stack:

- [Tailwind CSS](https://tailwindcss.com/docs/guides/nextjs) guide
- [Headless UI](https://headlessui.com/) documentation
- [Rapid API](https://rapidapi.com/apininjas/api/cars-by-api-ninjas) api #1
- [Car Images](https://www.imagin.studio/car-image-api) api #2

### Project setup: 

```bash
npx create-next-app@latest ./
```
- Typescript: Y
- ESLint: N
- Tailwind: Y
- src directory: N
- App router: Y
- import alias: N  

### Run dev server:

```bash
npm run dev
```

### Deployment:

[Project deployed](http://my-car-showcase.vercel.app) on Vercel

### Important info:

Every page and component in Next.js are Server Side Rendered, meaning the data is fetched directly on the server.
SSR components can be converted into CSR components by applying "use client" (for all the browser events).

### Component Structure:

<!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=5,IE=9" ><![endif]-->
<!DOCTYPE html>
<html>
<head>
<title>component-structure</title>
<meta charset="utf-8"/>
</head>
<body><div class="mxgraph" style="max-width:100%;border:1px solid transparent;" data-mxgraph="{&quot;highlight&quot;:&quot;#0000ff&quot;,&quot;nav&quot;:true,&quot;resize&quot;:true,&quot;toolbar&quot;:&quot;zoom layers tags lightbox&quot;,&quot;edit&quot;:&quot;_blank&quot;,&quot;xml&quot;:&quot;&lt;mxfile host=\&quot;app.diagrams.net\&quot; modified=\&quot;2023-06-22T14:57:25.525Z\&quot; agent=\&quot;5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36\&quot; etag=\&quot;SltE1TcVNczK8szyH0NX\&quot; version=\&quot;20.5.1\&quot; type=\&quot;device\&quot;&gt;&lt;diagram name=\&quot;Page-1\&quot; id=\&quot;97916047-d0de-89f5-080d-49f4d83e522f\&quot;&gt;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&lt;/diagram&gt;&lt;/mxfile&gt;&quot;}"></div>
<script type="text/javascript" src="https://viewer.diagrams.net/js/viewer-static.min.js"></script>
</body>
</html>