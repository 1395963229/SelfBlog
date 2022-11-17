<template>
  <div class="test-container">
    <Layout>
      <template #left>
        <div>左边栏区域，宽度适应内容，溢出隐藏</div>
      </template>
      <div>
        主区域，宽度占满剩余空间，溢出隐藏Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Voluptatum, dolor. Quia ea eligendi non cum inventore
        odit officia impedit ipsum quisquam! Obcaecati perspiciatis aspernatur,
        sapiente ipsa facere assumenda! Debitis, iusto! Explicabo earum facilis
        quos vero doloremque magni vel itaque aut nam eveniet ullam modi
        voluptas, beatae eius? In esse ipsam aperiam eius! Neque nam est, unde
        corrupti enim fugit illum? Ad doloribus ratione voluptates, quibusdam
        consequuntur consectetur obcaecati laborum ut autem sequi dicta officiis
        tempore debitis. Odit, ea incidunt delectus, sint minus deleniti
        eveniet, porro id nobis mollitia vitae explicabo? Voluptatibus earum
        minus atque aliquam dolores fugit placeat eaque, optio delectus,
        sapiente voluptatum itaque provident maiores, corrupti similique?
        Ducimus culpa quos nostrum laudantium a tenetur inventore libero, quis
        unde hic. Voluptates aut aliquid nemo voluptatum! Repellat praesentium
        aliquam atque laudantium magnam! Fugiat sapiente nam esse molestiae
        minus totam! Debitis eligendi enim quos voluptatum? Magni minima ex,
        quibusdam ut odio inventore! A quasi velit officiis voluptatem quas
        ipsam maxime architecto, sunt deserunt, porro tempore aut veniam sit
        beatae ipsa harum! Ducimus maiores ipsam ad. Tenetur nam tempore
        eligendi molestiae minus ab. Maiores, obcaecati. Aperiam ab magnam
        perferendis. Ipsum magni deserunt omnis sequi vero debitis tempore ab
        ipsam. Maiores est asperiores in quisquam, at tempore iste quia, esse
        dolores earum autem quo? Quam veritatis assumenda numquam asperiores
        quis, in sapiente exercitationem magnam, maxime eaque, eos tenetur
        blanditiis laudantium. Eius, necessitatibus vitae. Doloremque id sit
        recusandae, pariatur reiciendis assumenda ut consequuntur praesentium
        vel. Aliquid, deleniti. Praesentium corrupti, rem deserunt nostrum
        repellat amet error optio obcaecati reiciendis asperiores quibusdam odit
        reprehenderit repudiandae laborum officia. Molestiae optio quia quos.
        Reiciendis nihil amet perferendis officiis? Quam. Sed atque culpa
        quibusdam mollitia totam nihil repellat pariatur quod impedit rerum
        velit fuga sit cum cumque, voluptates recusandae voluptatibus laboriosam
        porro sapiente, doloremque exercitationem placeat aperiam ab? Velit,
        vero?
      </div>
      <template #right>
        <div>右边栏区域，宽度适应内容，溢出隐藏</div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./"
export default {
  components: {
    Layout,
  },
}
</script>

<style lang="less" scoped>
.test-container {
  width: 80%;
  height: 500px;
  background-color: pink;
}
</style>
