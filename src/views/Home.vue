<template>
  <div class="home">
    <div class="grim">
      <div class="grim__item">
        <router-link to="/about" class="grim__item-link">
          <h2 class="grim__item-title">
            Meet Ankit Karnany a creative developer from the future.
          </h2>
          <div class="grim__item-img"></div>
        </router-link>
      </div>
      <div class="grim__item">
        <router-link to="/cmrad-signup" class="grim__item-link">
          <h2 class="grim__item-title">Cmrad Sign Up</h2>
          <div class="grim__item-img"></div>
        </router-link>
      </div>
      <div class="grim__item">
        <router-link to="/local-cook" class="grim__item-link">
          <h2 class="grim__item-title">Local Cook</h2>
          <div class="grim__item-img"></div>
        </router-link>
      </div>
      <div class="grim__item">
        <router-link to="/tesla" class="grim__item-link">
          <h2 class="grim__item-title">Tesla Outrun Mode</h2>
          <div class="grim__item-img"></div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
