<template>
  <div>
    <iframe width="420" height="315" :src="posts[0].video"> </iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      urlPosts: "http://localhost:3001/posts",
      posts: [],
      errors: []
    };
  },
  async mounted() {
    try {
      const takeData = await fetch(this.urlPosts);
      const result = await takeData.json();
      this.posts.push(...result);
      console.log(result);
    } catch (error) {
      this.errors.push(error);
    }
  },
};
</script>