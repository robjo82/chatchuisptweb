import React from 'react'
import styles from '../style';

const CGU = () => (

  <section id="cgu" className={`flex flex-col justify-center items-center ${styles.paddingY}`}>
    
    {/* Title */}
    <h1 className={`flex-1 font-poppins font-semibold ss:text-[58px] text-[52px] text-white z-[2] py-10 text-center`}>
      Our CGU
    </h1>  

    {/* Paragraph 1*/}
    <div className={`flex flex-row w-full pb-10`}>
      <h3 className={`flex-1 font-poppins font-semibold ss:text-[38px] text-[32px] text-white z-[2] py-10 ${styles.paddingX} `}>
        Introduction
      </h3>
      <div className={`flex flex-row w-full pb-10`}>
        <p className={`flex-1 font-poppins text-[20px] md:text-[28px] text-white z-[2]`}>
          Bienvenue sur Chat ChuisPT ! Nous prenons très au sérieux la confidentialité des utilisateurs de notre application. Cette politique de confidentialité (la "Politique") décrit les informations que nous recueillons, comment nous les utilisons et vos options en matière de partage d'informations. En utilisant notre application, vous acceptez les pratiques décrites dans cette Politique.
        </p>
      </div>
    </div>

        {/* Paragraph 2 */}
        <div className={`flex flex-row w-full pb-10`}>
      <h3 className={`flex-1 font-poppins font-semibold ss:text-[38px] text-[32px] text-white z-[2] py-10 ${styles.paddingX} `}>
        Les informations que nous recueillons
      </h3>
      <div className={`flex flex-row w-full pb-10`}>
        <p className={`flex-1 font-poppins text-[20px] md:text-[28px] text-white z-[2]`}>
          Les seules informations personnelles que nous recueillons sont vos informations de connexion, qui comprennent votre adresse e-mail, votre nom et votre prénom. Ces informations sont nécessaires pour créer un compte et vous permettre de vous connecter à notre application.
        </p>
      </div>
    </div>

        {/* Paragraph 3 */}
        <div className={`flex flex-row w-full pb-10`}>
      <h3 className={`flex-1 font-poppins font-semibold ss:text-[38px] text-[32px] text-white z-[2] py-10 ${styles.paddingX} `}>
        Utilisation des informations

      </h3>
      <div className={`flex flex-row w-full pb-10`}>
        <p className={`flex-1 font-poppins text-[20px] md:text-[28px] text-white z-[2]`}>
          Nous utilisons vos informations de connexion uniquement pour vous permettre d'accéder et d'utiliser notre application. Nous ne les utilisons à aucune autre fin et nous ne les partageons avec aucun tiers.
        </p>
      </div>
    </div>

        {/* Paragraph 4 */}
        <div className={`flex flex-row w-full pb-10`}>
      <h3 className={`flex-1 font-poppins font-semibold ss:text-[38px] text-[32px] text-white z-[2] py-10 ${styles.paddingX} `}>
        Protection des informations
      </h3>
      <div className={`flex flex-row w-full pb-10`}>
        <p className={`flex-1 font-poppins text-[20px] md:text-[28px] text-white z-[2]`}>
          Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations de connexion contre l'accès, l'utilisation ou la divulgation non autorisés. Cependant, aucune méthode de transmission ou de stockage électronique n'est totalement sécurisée. Par conséquent, alors que nous nous efforçons de protéger vos informations personnelles, nous ne pouvons garantir leur sécurité absolue.
        </p>
      </div>
    </div>

        {/* Paragraph  5 */}
        <div className={`flex flex-row w-full pb-10`}>
      <h3 className={`flex-1 font-poppins font-semibold ss:text-[38px] text-[32px] text-white z-[2] py-10 ${styles.paddingX} `}>
        Modifications de notre politique de confidentialité
      </h3>
      <div className={`flex flex-row w-full pb-10`}>
        <p className={`flex-1 font-poppins text-[20px] md:text-[28px] text-white z-[2]`}>
          Nous pouvons occasionnellement mettre à jour notre Politique de confidentialité. Lorsque nous le ferons, nous mettrons à jour la date de "dernière mise à jour" en bas de la Politique. Nous vous encourageons à consulter régulièrement cette Politique pour rester informé de nos pratiques en matière de protection des informations que nous recueillons.
        </p>
      </div>
    </div>

        {/* Paragraph 6 */}
        <div className={`flex flex-row w-full pb-10`}>
      <h3 className={`flex-1 font-poppins font-semibold ss:text-[38px] text-[32px] text-white z-[2] py-10 ${styles.paddingX} `}>
        Introduction
      </h3>
      <div className={`flex flex-row w-full pb-10`}>
        <p className={`flex-1 font-poppins text-[20px] md:text-[28px] text-white z-[2]`}>
          Si vous avez des questions sur cette politique de confidentialité, veuillez nous contacter à robin82joseph@gmail.com.
        </p>
      </div>
    </div>

    <h3 className={`flex-1 font-poppins font-semibold ss:text-[38px] text-[32px] text-white z-[2] py-10}`}>
      Dernière mise à jour : 28 juin 2023
    </h3>
  </section>
  
)

export default CGU