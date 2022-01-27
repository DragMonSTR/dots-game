<template>
  <div class="rules">
    <Button
      class="back-button"
      :text="getStringResource('mainMenu')"
      icon-name="back"
    />

    <div class="rules__text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus modi quia sunt. Adipisci cum fugit id iusto laborum odit optio sint suscipit. Eos, excepturi molestiae natus nostrum repellat tempore ut. Accusamus assumenda cumque cupiditate doloribus eum excepturi exercitationem hic impedit ipsam libero magni maxime natus nobis, temporibus totam! A assumenda cupiditate ipsum laboriosam, libero perferendis quo quod, recusandae rem saepe, sunt vel! Ab architecto, consequatur earum est magni quo saepe sit sunt totam! A alias atque consectetur corporis dicta ducimus earum error, facilis harum inventore laboriosam magnam nam natus numquam officia perspiciatis provident quo reiciendis, rem reprehenderit suscipit tenetur vero. Accusantium ad aliquam animi consectetur cupiditate debitis delectus deleniti distinctio doloremque, eaque earum eius eligendi eos error esse et eveniet facere hic ipsam labore laboriosam, laudantium minus molestias nemo non optio quaerat quidem quis quisquam soluta sunt tempora unde voluptatibus. Consequuntur, dolorem doloremque ea eligendi, esse expedita harum ipsum laudantium maxime mollitia repellat tenetur voluptate voluptatem voluptates voluptatibus. Aperiam dolorem eos error eum hic illum, in, incidunt ipsam, iusto natus praesentium quaerat quas qui quis rem suscipit vitae. Ab deleniti distinctio error hic nam, nemo praesentium repellendus, repudiandae sapiente sint vitae voluptatum? Adipisci alias aspernatur, aut deserunt distinctio ducimus fugit itaque odio officiis omnis quaerat quasi soluta, veritatis. A, alias dolor dolorem est hic modi odit quia recusandae sapiente veritatis voluptatibus voluptatum. Atque aut consectetur deleniti, deserunt doloremque ipsa, laborum minima minus molestiae nihil odit quia sint soluta tempora voluptatem? Ad alias consectetur consequatur, consequuntur cupiditate dolor dolorum est incidunt laborum molestiae nihil nobis nostrum odit quos recusandae repellendus sapiente temporibus. Aspernatur, commodi minus perferendis sapiente tempora voluptatibus. A, accusamus debitis deleniti dignissimos dolorum eius error ex facilis inventore ipsa itaque modi nam neque odio, omnis praesentium quaerat quos ratione recusandae rem repellat repellendus reprehenderit similique sit, suscipit tempora veritatis voluptatibus. Ad consequuntur cumque deleniti doloribus dolorum earum est excepturi ipsum iure nesciunt nihil nobis non officiis pariatur porro possimus provident quae quisquam, quod quos repellat sapiente soluta tenetur voluptates voluptatibus! A aliquid, delectus dicta dignissimos error esse excepturi exercitationem facilis harum illo impedit in incidunt quis, ratione tempora unde voluptatibus voluptatum. Assumenda blanditiis delectus distinctio, dolorum et ex exercitationem explicabo illo ipsam omnis quod soluta tempora temporibus totam ullam. Asperiores atque cum error, ex modi recusandae reiciendis saepe ut! Accusamus alias aliquam aliquid architecto, asperiores at aut cum delectus dolore doloremque dolorum enim excepturi expedita hic impedit incidunt inventore iste, iure magni maxime minima modi natus nihil obcaecati omnis optio placeat qui quos ratione reiciendis repellat repudiandae saepe, sapiente soluta ullam ut vero. Architecto aspernatur commodi, consequatur corporis deleniti distinctio doloremque doloribus dolorum ducimus ea eos excepturi fugit in, laboriosam laudantium natus nisi nostrum placeat qui quidem quo quod, rem saepe ullam voluptate? Iusto labore nihil nulla obcaecati ullam velit voluptas! Animi dicta nesciunt repellendus sit tempore. Atque autem beatae distinctio itaque rem, tempore totam. Delectus, laudantium officiis? Assumenda atque consectetur corporis debitis dolor facere qui quidem veritatis! Ducimus laudantium maxime molestiae quia similique. Aliquam minus quas repellat voluptas.
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button"
import {mapGetters} from "vuex"

export default {
  name: "Rules",
  components: {Button},
  computed: {
    ...mapGetters({
      getStringResource: "getStringResource"
    })
  }
}
</script>

<style scoped>
.rules {
  width: 100vw;
  min-height: 100vh;
  padding: 100px 100px;

  background-color: #ffe;
}


.back-button {
  margin: 0 0 100px 0;
}


.rules__text {
  font-size: 30px;
  line-height: 1.4em;
}
</style>