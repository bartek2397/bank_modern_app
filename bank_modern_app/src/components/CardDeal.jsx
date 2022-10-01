import React from 'react';
import { card } from '../assets'
import styles, { layout } from '../styles'
import Button from './Button';


const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden'/> in few easy steps</h2>
        <p className={`${styles.paragraph} max-width[470px] mt-5`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus itaque aliquam obcaecati ducimus sit necessitatibus, labore quisquam, impedit eius voluptatum fugit vitae error quaerat esse! Ab omnis eligendi provident quae!</p>
      <Button styles='mt-10'/>
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className='w-[100%] h-[100%]' />
      </div>

    </section>
  
)
export default CardDeal