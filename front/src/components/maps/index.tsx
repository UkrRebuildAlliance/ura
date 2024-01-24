export const Maps = ({}) => (
  <div className="aspect-[1/2] sm:aspect-square tablet:aspect-[2/1] desktop:aspect-[2.25/1 ">
    <iframe
      width="100%"
      height="100%"
      loading="lazy"
      allowFullScreen={true}
      referrerPolicy="no-referrer-when-downgrade"
      style={{ borderRadius: '20px', border: '2px solid #483BC9' }}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d343.46645490884725!2d30.74514327511942!3d46.47382335599342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c63177e77c2d5d%3A0x6d6cf7724d5ea704!2z0YPQuy4g0JHQsNC30LDRgNC90LDRjywgNDAsINCe0LTQtdGB0YHQsCwg0J7QtNC10YHRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNjUwMDA!5e0!3m2!1sru!2sua!4v1702491955901!5m2!1sru!2sua"
    />
  </div>
);
