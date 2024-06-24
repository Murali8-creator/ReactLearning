import Accordion from './components/Accordion/Accordion';
import AccordionItem from './components/Accordion/AccordionItem';

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>

        <Accordion className='accordion'>
          <Accordion.Item className='accordian-item'  id='experience'>
            <Accordion.Title className='accordian-item-title'>We got 20 years of experience</Accordion.Title>
            <Accordion.Content className='accordian-item-content'>
              <article>
                <p>You can&apos;t go wrong with us.</p>
                <p>
                  We are in the business of planning highly individualzed
                  vacation trips for more than 20 years
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item className='accordian-item' id='local-guides'>
            <Accordion.Title  className='accordian-item-title'>We are working with local guides</Accordion.Title>
            <Accordion.Content className='accordian-item-content'>
              <article>
                <p>You can&apos;t go wrong with us.</p>
                <p>
                  We are in the business of planning highly individualzed
                  vacation trips for more than 20 years
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
