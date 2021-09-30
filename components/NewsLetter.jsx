import Input from "./Input";
import MiniBanner from "./MiniBanner";
import RoundButton from "./RoundButton";

export default function NewsLetter() {
  return (
    <MiniBanner>
      <div className="newsletter">
        <h1 className="title text-center">SUBSCRIBE TO OUR NEWSLETTER</h1>
        <form>
          <div className="d-flex gap-2 justify-content-center">
            <div className="col-9">
              <Input src="/email.svg" placeholder="Enter Email" />
            </div>
            <div className="">
              <RoundButton className="rounded subscribe-button">
                Submit
              </RoundButton>
            </div>
          </div>
        </form>
      </div>
    </MiniBanner>
  );
}
