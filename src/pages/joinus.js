import React, { Component } from "react";
import Layout from "components/layout";
import Masonry from "react-masonry-css";
import JoinUsGraphic1 from "images/svgs/joinus/joinus1.svg";
import JoinUsGraphic2 from "images/svgs/joinus/joinus2.svg";
import UploadIcon from "images/svgs/upload-icon.svg";
import LeftBase from "images/svgs/left-base.svg";
import RightBase from "images/svgs/right-base.svg";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import "page-styles/joinus.scss";
import { EMAIL_DOMAIN, CMS_ENDPOINT } from "../constants/constants";
import Button from "components/Button/Button";
import axios from 'axios';

export const JoinUsDescCard = ({ title, paras }) => {
  return (
    <div className="join-us-desc-card">
      <h1 className="header-text">{title}</h1>
      <div className="desc">
        {paras.map(para => (
          <p className="para">{para}</p>
        ))}
      </div>
    </div>
  );
};

export const CountryCodeField = ({ name, className, callback, value }) => {
  return (
    <select name={`${name}`} className={className} id="" value={value} placeholder="Country Code" onChange={callback}>
      <option value="" disabled selected>Country Code</option>
      <option data-countryCode="US" value="1">USA (+1)</option>
      <option data-countryCode="US" value="44">UK (+44)</option>
      <option data-countryCode="IN" value="91">India (+91)</option>
      <option data-countryCode="AU" value="61">Australia (+61)</option>
      <option data-countryCode="SG" value="65">Singapore (+65)</option>
      <optgroup label="Other countries">
        <option data-countryCode="DZ" value="213">Algeria (+213)</option>
        <option data-countryCode="AD" value="376">Andorra (+376)</option>
        <option data-countryCode="AO" value="244">Angola (+244)</option>
        <option data-countryCode="AI" value="1264">Anguilla (+1264)</option>
        <option data-countryCode="AG" value="1268">Antigua &amp; Barbuda (+1268)</option>
        <option data-countryCode="AR" value="54">Argentina (+54)</option>
        <option data-countryCode="AM" value="374">Armenia (+374)</option>
        <option data-countryCode="AW" value="297">Aruba (+297)</option>
        <option data-countryCode="AT" value="43">Austria (+43)</option>
        <option data-countryCode="AZ" value="994">Azerbaijan (+994)</option>
        <option data-countryCode="BS" value="1242">Bahamas (+1242)</option>
        <option data-countryCode="BH" value="973">Bahrain (+973)</option>
        <option data-countryCode="BD" value="880">Bangladesh (+880)</option>
        <option data-countryCode="BB" value="1246">Barbados (+1246)</option>
        <option data-countryCode="BY" value="375">Belarus (+375)</option>
        <option data-countryCode="BE" value="32">Belgium (+32)</option>
        <option data-countryCode="BZ" value="501">Belize (+501)</option>
        <option data-countryCode="BJ" value="229">Benin (+229)</option>
        <option data-countryCode="BM" value="1441">Bermuda (+1441)</option>
        <option data-countryCode="BT" value="975">Bhutan (+975)</option>
        <option data-countryCode="BO" value="591">Bolivia (+591)</option>
        <option data-countryCode="BA" value="387">Bosnia Herzegovina (+387)</option>
        <option data-countryCode="BW" value="267">Botswana (+267)</option>
        <option data-countryCode="BR" value="55">Brazil (+55)</option>
        <option data-countryCode="BN" value="673">Brunei (+673)</option>
        <option data-countryCode="BG" value="359">Bulgaria (+359)</option>
        <option data-countryCode="BF" value="226">Burkina Faso (+226)</option>
        <option data-countryCode="BI" value="257">Burundi (+257)</option>
        <option data-countryCode="KH" value="855">Cambodia (+855)</option>
        <option data-countryCode="CM" value="237">Cameroon (+237)</option>
        <option data-countryCode="CA" value="1">Canada (+1)</option>
        <option data-countryCode="CV" value="238">Cape Verde Islands (+238)</option>
        <option data-countryCode="KY" value="1345">Cayman Islands (+1345)</option>
        <option data-countryCode="CF" value="236">Central African Republic (+236)</option>
        <option data-countryCode="CL" value="56">Chile (+56)</option>
        <option data-countryCode="CN" value="86">China (+86)</option>
        <option data-countryCode="CO" value="57">Colombia (+57)</option>
        <option data-countryCode="KM" value="269">Comoros (+269)</option>
        <option data-countryCode="CG" value="242">Congo (+242)</option>
        <option data-countryCode="CK" value="682">Cook Islands (+682)</option>
        <option data-countryCode="CR" value="506">Costa Rica (+506)</option>
        <option data-countryCode="HR" value="385">Croatia (+385)</option>
        <option data-countryCode="CU" value="53">Cuba (+53)</option>
        <option data-countryCode="CY" value="90392">Cyprus North (+90392)</option>
        <option data-countryCode="CY" value="357">Cyprus South (+357)</option>
        <option data-countryCode="CZ" value="42">Czech Republic (+42)</option>
        <option data-countryCode="DK" value="45">Denmark (+45)</option>
        <option data-countryCode="DJ" value="253">Djibouti (+253)</option>
        <option data-countryCode="DM" value="1809">Dominica (+1809)</option>
        <option data-countryCode="DO" value="1809">Dominican Republic (+1809)</option>
        <option data-countryCode="EC" value="593">Ecuador (+593)</option>
        <option data-countryCode="EG" value="20">Egypt (+20)</option>
        <option data-countryCode="SV" value="503">El Salvador (+503)</option>
        <option data-countryCode="GQ" value="240">Equatorial Guinea (+240)</option>
        <option data-countryCode="ER" value="291">Eritrea (+291)</option>
        <option data-countryCode="EE" value="372">Estonia (+372)</option>
        <option data-countryCode="ET" value="251">Ethiopia (+251)</option>
        <option data-countryCode="FK" value="500">Falkland Islands (+500)</option>
        <option data-countryCode="FO" value="298">Faroe Islands (+298)</option>
        <option data-countryCode="FJ" value="679">Fiji (+679)</option>
        <option data-countryCode="FI" value="358">Finland (+358)</option>
        <option data-countryCode="FR" value="33">France (+33)</option>
        <option data-countryCode="GF" value="594">French Guiana (+594)</option>
        <option data-countryCode="PF" value="689">French Polynesia (+689)</option>
        <option data-countryCode="GA" value="241">Gabon (+241)</option>
        <option data-countryCode="GM" value="220">Gambia (+220)</option>
        <option data-countryCode="GE" value="7880">Georgia (+7880)</option>
        <option data-countryCode="DE" value="49">Germany (+49)</option>
        <option data-countryCode="GH" value="233">Ghana (+233)</option>
        <option data-countryCode="GI" value="350">Gibraltar (+350)</option>
        <option data-countryCode="GR" value="30">Greece (+30)</option>
        <option data-countryCode="GL" value="299">Greenland (+299)</option>
        <option data-countryCode="GD" value="1473">Grenada (+1473)</option>
        <option data-countryCode="GP" value="590">Guadeloupe (+590)</option>
        <option data-countryCode="GU" value="671">Guam (+671)</option>
        <option data-countryCode="GT" value="502">Guatemala (+502)</option>
        <option data-countryCode="GN" value="224">Guinea (+224)</option>
        <option data-countryCode="GW" value="245">Guinea - Bissau (+245)</option>
        <option data-countryCode="GY" value="592">Guyana (+592)</option>
        <option data-countryCode="HT" value="509">Haiti (+509)</option>
        <option data-countryCode="HN" value="504">Honduras (+504)</option>
        <option data-countryCode="HK" value="852">Hong Kong (+852)</option>
        <option data-countryCode="HU" value="36">Hungary (+36)</option>
        <option data-countryCode="IS" value="354">Iceland (+354)</option>
        <option data-countryCode="ID" value="62">Indonesia (+62)</option>
        <option data-countryCode="IR" value="98">Iran (+98)</option>
        <option data-countryCode="IQ" value="964">Iraq (+964)</option>
        <option data-countryCode="IE" value="353">Ireland (+353)</option>
        <option data-countryCode="IL" value="972">Israel (+972)</option>
        <option data-countryCode="IT" value="39">Italy (+39)</option>
        <option data-countryCode="JM" value="1876">Jamaica (+1876)</option>
        <option data-countryCode="JP" value="81">Japan (+81)</option>
        <option data-countryCode="JO" value="962">Jordan (+962)</option>
        <option data-countryCode="KZ" value="7">Kazakhstan (+7)</option>
        <option data-countryCode="KE" value="254">Kenya (+254)</option>
        <option data-countryCode="KI" value="686">Kiribati (+686)</option>
        <option data-countryCode="KP" value="850">Korea North (+850)</option>
        <option data-countryCode="KR" value="82">Korea South (+82)</option>
        <option data-countryCode="KW" value="965">Kuwait (+965)</option>
        <option data-countryCode="KG" value="996">Kyrgyzstan (+996)</option>
        <option data-countryCode="LA" value="856">Laos (+856)</option>
        <option data-countryCode="LV" value="371">Latvia (+371)</option>
        <option data-countryCode="LB" value="961">Lebanon (+961)</option>
        <option data-countryCode="LS" value="266">Lesotho (+266)</option>
        <option data-countryCode="LR" value="231">Liberia (+231)</option>
        <option data-countryCode="LY" value="218">Libya (+218)</option>
        <option data-countryCode="LI" value="417">Liechtenstein (+417)</option>
        <option data-countryCode="LT" value="370">Lithuania (+370)</option>
        <option data-countryCode="LU" value="352">Luxembourg (+352)</option>
        <option data-countryCode="MO" value="853">Macao (+853)</option>
        <option data-countryCode="MK" value="389">Macedonia (+389)</option>
        <option data-countryCode="MG" value="261">Madagascar (+261)</option>
        <option data-countryCode="MW" value="265">Malawi (+265)</option>
        <option data-countryCode="MY" value="60">Malaysia (+60)</option>
        <option data-countryCode="MV" value="960">Maldives (+960)</option>
        <option data-countryCode="ML" value="223">Mali (+223)</option>
        <option data-countryCode="MT" value="356">Malta (+356)</option>
        <option data-countryCode="MH" value="692">Marshall Islands (+692)</option>
        <option data-countryCode="MQ" value="596">Martinique (+596)</option>
        <option data-countryCode="MR" value="222">Mauritania (+222)</option>
        <option data-countryCode="YT" value="269">Mayotte (+269)</option>
        <option data-countryCode="MX" value="52">Mexico (+52)</option>
        <option data-countryCode="FM" value="691">Micronesia (+691)</option>
        <option data-countryCode="MD" value="373">Moldova (+373)</option>
        <option data-countryCode="MC" value="377">Monaco (+377)</option>
        <option data-countryCode="MN" value="976">Mongolia (+976)</option>
        <option data-countryCode="MS" value="1664">Montserrat (+1664)</option>
        <option data-countryCode="MA" value="212">Morocco (+212)</option>
        <option data-countryCode="MZ" value="258">Mozambique (+258)</option>
        <option data-countryCode="MN" value="95">Myanmar (+95)</option>
        <option data-countryCode="NA" value="264">Namibia (+264)</option>
        <option data-countryCode="NR" value="674">Nauru (+674)</option>
        <option data-countryCode="NP" value="977">Nepal (+977)</option>
        <option data-countryCode="NL" value="31">Netherlands (+31)</option>
        <option data-countryCode="NC" value="687">New Caledonia (+687)</option>
        <option data-countryCode="NZ" value="64">New Zealand (+64)</option>
        <option data-countryCode="NI" value="505">Nicaragua (+505)</option>
        <option data-countryCode="NE" value="227">Niger (+227)</option>
        <option data-countryCode="NG" value="234">Nigeria (+234)</option>
        <option data-countryCode="NU" value="683">Niue (+683)</option>
        <option data-countryCode="NF" value="672">Norfolk Islands (+672)</option>
        <option data-countryCode="NP" value="670">Northern Marianas (+670)</option>
        <option data-countryCode="NO" value="47">Norway (+47)</option>
        <option data-countryCode="OM" value="968">Oman (+968)</option>
        <option data-countryCode="PW" value="680">Palau (+680)</option>
        <option data-countryCode="PA" value="507">Panama (+507)</option>
        <option data-countryCode="PG" value="675">Papua New Guinea (+675)</option>
        <option data-countryCode="PY" value="595">Paraguay (+595)</option>
        <option data-countryCode="PE" value="51">Peru (+51)</option>
        <option data-countryCode="PH" value="63">Philippines (+63)</option>
        <option data-countryCode="PL" value="48">Poland (+48)</option>
        <option data-countryCode="PT" value="351">Portugal (+351)</option>
        <option data-countryCode="PR" value="1787">Puerto Rico (+1787)</option>
        <option data-countryCode="QA" value="974">Qatar (+974)</option>
        <option data-countryCode="RE" value="262">Reunion (+262)</option>
        <option data-countryCode="RO" value="40">Romania (+40)</option>
        <option data-countryCode="RU" value="7">Russia (+7)</option>
        <option data-countryCode="RW" value="250">Rwanda (+250)</option>
        <option data-countryCode="SM" value="378">San Marino (+378)</option>
        <option data-countryCode="ST" value="239">Sao Tome &amp; Principe (+239)</option>
        <option data-countryCode="SA" value="966">Saudi Arabia (+966)</option>
        <option data-countryCode="SN" value="221">Senegal (+221)</option>
        <option data-countryCode="CS" value="381">Serbia (+381)</option>
        <option data-countryCode="SC" value="248">Seychelles (+248)</option>
        <option data-countryCode="SL" value="232">Sierra Leone (+232)</option>
        <option data-countryCode="SK" value="421">Slovak Republic (+421)</option>
        <option data-countryCode="SI" value="386">Slovenia (+386)</option>
        <option data-countryCode="SB" value="677">Solomon Islands (+677)</option>
        <option data-countryCode="SO" value="252">Somalia (+252)</option>
        <option data-countryCode="ZA" value="27">South Africa (+27)</option>
        <option data-countryCode="ES" value="34">Spain (+34)</option>
        <option data-countryCode="LK" value="94">Sri Lanka (+94)</option>
        <option data-countryCode="SH" value="290">St. Helena (+290)</option>
        <option data-countryCode="KN" value="1869">St. Kitts (+1869)</option>
        <option data-countryCode="SC" value="1758">St. Lucia (+1758)</option>
        <option data-countryCode="SD" value="249">Sudan (+249)</option>
        <option data-countryCode="SR" value="597">Suriname (+597)</option>
        <option data-countryCode="SZ" value="268">Swaziland (+268)</option>
        <option data-countryCode="SE" value="46">Sweden (+46)</option>
        <option data-countryCode="CH" value="41">Switzerland (+41)</option>
        <option data-countryCode="SI" value="963">Syria (+963)</option>
        <option data-countryCode="TW" value="886">Taiwan (+886)</option>
        <option data-countryCode="TJ" value="7">Tajikstan (+7)</option>
        <option data-countryCode="TH" value="66">Thailand (+66)</option>
        <option data-countryCode="TG" value="228">Togo (+228)</option>
        <option data-countryCode="TO" value="676">Tonga (+676)</option>
        <option data-countryCode="TT" value="1868">Trinidad &amp; Tobago (+1868)</option>
        <option data-countryCode="TN" value="216">Tunisia (+216)</option>
        <option data-countryCode="TR" value="90">Turkey (+90)</option>
        <option data-countryCode="TM" value="7">Turkmenistan (+7)</option>
        <option data-countryCode="TM" value="993">Turkmenistan (+993)</option>
        <option data-countryCode="TC" value="1649">Turks &amp; Caicos Islands (+1649)</option>
        <option data-countryCode="TV" value="688">Tuvalu (+688)</option>
        <option data-countryCode="UG" value="256">Uganda (+256)</option>
        <option data-countryCode="UA" value="380">Ukraine (+380)</option>
        <option data-countryCode="AE" value="971">United Arab Emirates (+971)</option>
        <option data-countryCode="UY" value="598">Uruguay (+598)</option>
        <option data-countryCode="UZ" value="7">Uzbekistan (+7)</option>
        <option data-countryCode="VU" value="678">Vanuatu (+678)</option>
        <option data-countryCode="VA" value="379">Vatican City (+379)</option>
        <option data-countryCode="VE" value="58">Venezuela (+58)</option>
        <option data-countryCode="VN" value="84">Vietnam (+84)</option>
        <option data-countryCode="VG" value="84">Virgin Islands - British (+1284)</option>
        <option data-countryCode="VI" value="84">Virgin Islands - US (+1340)</option>
        <option data-countryCode="WF" value="681">Wallis &amp; Futuna (+681)</option>
        <option data-countryCode="YE" value="969">Yemen (North)(+969)</option>
        <option data-countryCode="YE" value="967">Yemen (South)(+967)</option>
        <option data-countryCode="ZM" value="260">Zambia (+260)</option>
        <option data-countryCode="ZW" value="263">Zimbabwe (+263)</option>
      </optgroup>
    </select>
  );
};

export const AreaOfExpertiseField = ({ name, className, callback, value }) => {
    return (
     <select name={`${name}`} className={className} id="" value={value} placeholder="Area of Expertise" onChange={callback}>
       <option value="Full Stack">Full Stack Engineer</option>
       <option value="Data Engineer">Data Engineer</option>
       <option value="Data Scientist">Data Scientist</option>
       <option value="Devops">Devops</option>
       <option value="UI Dev">UI Dev</option>
       <option value="UX Designer">UX Designer</option>
       <option value="Fresher">Fresher</option>
       <option value="Other">Operations</option>
     </select>
    )
};

export const ChannelField = ({ name, className, callback, value }) => {
    return (
     <select name={`${name}`} className={className} id="" value={value} placeholder="where did you hear about us" onChange={callback}>
       <option value="linkedin">Linkedin</option>
       <option value="job_boards">Job Boards</option>
       <option value="referral">Referral</option>
       <option value="facebook">Facebook</option>
       <option value="events">Events / DevDay</option>
       <option value="blogs">Blogs / Medium articles</option>
       <option value="other">Other</option>
     </select>
    )
};

export const LocationField = ({ name, className, callback, value }) => {
  return (
    <select
      name={`${name}`}
      className={className}
      id="location-select"
      value={value}
      placeholder="Where do you want to work"
      onChange={callback}
    >
      <option value="Bangalore">Bangalore</option>
      <option value="Chennai">Chennai</option>
      <option value="Pune">Pune</option>
      <option value="Melbourne">Melbourne</option>
      <option value="London">London</option>
      <option value="San Francisco">San Francisco</option>
      <option value="Remote">Remote</option>
    </select>
  );
}

class Navigation extends Component {
  state = {
    current_select: 'none',
    showOnly: false,
  }

  updateSelection = (e) => {
    const divElement = document.getElementById(e.currentTarget.getAttribute("data-id").slice(1));
    divElement.scrollIntoView({ behavior: 'smooth' });
    // this.setState({ current_select: e.currentTarget.getAttribute("data-id") });
  }

  togglOtherNav = (e) => {
    this.setState({ showOnly: !this.state.showOnly });
  }

  render() {
    return (
      <div className="nav-entries">
        <div className="nav-entry">
          &nbsp;
        </div>
        <div className={`nav-entry  ${this.state.current_select == '#who-are-we' ? "selected-nav" : `${this.state.showOnly ? "hide-nav" : ""}`} `}>
          <a data-id="#who-are-we" onClick={this.updateSelection}>Who are we?</a>
        </div>
        <div className={`nav-entry  ${this.state.current_select == '#why-sahaj' ? "selected-nav" : `${this.state.showOnly ? "hide-nav" : ""}`}`}>
          <a data-id="#why-sahaj" onClick={this.updateSelection}>Why Sahaj?</a>
        </div>
        <div className={`nav-entry  ${this.state.current_select == '#what-you-do' ? "selected-nav" : `${this.state.showOnly ? "hide-nav" : ""}`}`}>
          <a data-id="#what-you-do" onClick={this.updateSelection}>What you'll do?</a>
        </div>
        <div className={`nav-entry  ${this.state.current_select == '#skills-need' ? "selected-nav" : `${this.state.showOnly ? "hide-nav" : ""}`}`}>
          <a data-id="#skills-need" onClick={this.updateSelection}>Skills you will need</a>
        </div>
        <div className={`nav-entry  ${this.state.current_select == '#culture' ? "selected-nav" : `${this.state.showOnly ? "hide-nav" : ""}`}`}>
          <a data-id="#culture" onClick={this.updateSelection}>Culture</a>
        </div>
        <div className={`nav-entry  ${this.state.current_select == '#perks' ? "selected-nav" : `${this.state.showOnly ? "hide-nav" : ""}`}`}>
          <a data-id="#perks" onClick={this.updateSelection}>Perks</a>
        </div>
        <div className={`nav-entry  ${this.state.current_select == '#apply' ? "selected-nav" : `${this.state.showOnly ? "hide-nav" : ""}`}`}>
          <a data-id="#apply" onClick={this.updateSelection}>Apply</a>
        </div>
        <div className="hide-desktop" onClick={this.togglOtherNav}>
          {
            this.state.showOnly ? (
              <FaAngleDown className="collapse-icon" />
            ) : (
              <FaAngleUp className="collapse-icon" />
            )
          }
        </div>
      </div>
    );
  };
}

class JDForm extends Component {
  state = {
    name: '',
    email: '',
    countryCode: 1,
    phone: '',
    experience: '',
    jobRole: 'Full Stack',
    channel: 'linkedin',
    resume: null,
    location: 'Pune',
    error: '',
    fieldError: '',
    isSuccess: false,
    isFileUploadSuccess: false
  };

  handleChanges = (e) => {
    const input = e.target;
    const name = input.name;
    const value = input.value;

    this.setState({ [name]: value });
  }

  handleFiles = (e) => {
    if (e.target.files[0].size > 1050000) {
      this.setState({ error: 'Resume file should be < 1MB' });
    } else {
      this.setState({ error: '' });
      var file = e.target.files[0]
      var filename = file.name
      axios.get(`${process.env.NIRMAN_URL}/applications/upload_resume_url/?filename=${filename}`)
      .then(response => {
        console.log(response);
        this.setState({ resume: response.data.upload_url.split('?')[0] });
        console.log(this.state.resume);
        const result = axios.put(response.data.upload_url, file)
                       .then( response => {
                               console.log(response);
                               this.setState({ isFileUploadSuccess: true });
                               this.setState({ resume: response.config.url.split('?')[0] });
                               console.log(this.state.resume);
                       })
                       .catch(error => {
                             this.setState({ isFileUploadSuccess: false });
                             console.log(error);
                             this.setState({ error: 'There was an error in uploading the file, please try again.' });
                        });

      })
      .catch(error => {
        this.setState({ isFileUploadSuccess: false });
        console.log(error);
        this.setState({ error: 'There was an error in uploading the file, please try again.' });
      });
    }

  }

  validMail = (mail) => {
    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(mail);
  }

  submitResume = () => {

    const digits_only = string => [...string].every(c => '0123456789'.includes(c));
    if ((this.state.phone.length > 10 || this.state.phone.length < 10) || (!digits_only(this.state.phone)) || this.state.name == '') {
      this.setState({ fieldError: 'You have entered one or more fields incorrectly.' });
    }
    else if (!this.validMail(this.state.email)) {
      this.setState({ fieldError: 'Please provide valid email address' });
    } else if (this.state.resume == null) {
      this.setState({ fieldError: 'Please upload a resume PDF' });
    }
    else {
      this.setState({ fieldError: '' });

      const content = JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        country_code: this.state.countryCode,
        phone: this.state.phone,
        experience: this.state.experience,
        source: 'website',
        channel: this.state.channel,
        resume_url : this.state.resume,
        job_role: this.state.jobRole,
        location: this.state.location,
      })

      const config = {
        headers: { 'content-type': 'application/json' }
      }

      axios.post(`${process.env.NIRMAN_URL}/applications/`, content, config)
        .then(response => {
          console.log(response);
          this.setState({ isSuccess: true });
        })
        .catch(error => {
          this.setState({ isSuccess: false });
          console.log(error);
          this.setState({ error: 'There was an error in submitting the form, please try again.' });
        });
    }
  }

  render() {
    if (!this.state.isSuccess) {
      return (
        <div className="form-jd">
          <div className="field">
            <div className="field-name">Your Name<span className="imp-field">*</span></div>
            <div className="input">
              <input type="text" placeholder="Full Name here" value={this.state.name} onChange={this.handleChanges} name="name"></input>
            </div>
          </div>
          <div className="field">
            <div className="field-name">Email ID<span className="imp-field">*</span></div>
            <div className="input">
              <input type="email" placeholder="Contact Email ID" value={this.state.email} onChange={this.handleChanges} name="email"></input>
            </div>
          </div>
          <div className="field">
            <div className="field-name">Mobile No<span className="imp-field">*</span></div>
            <div className="input">
              <CountryCodeField
                name="countryCode"
                className="country-input"
                value={this.state.countryCode}
                callback={this.handleChanges}
              />
              <input type="tel" minLength={10} placeholder="Number" value={this.state.phone} onChange={this.handleChanges} name="phone"></input>
            </div>
          </div>
          <div className="field">
            <div className="field-name">Total No. Of Years of Experience<span className="imp-field">*</span></div>
            <div className="input">
              <input type="number" min={2} placeholder="Years of Experience" name="experience" value={this.state.experience} onChange={this.handleChanges}></input>
            </div>
          </div>
          <div className="field">
            <div className="field-name">Area of Expertise<span className="imp-field">*</span></div>
            <div className="input">
              <AreaOfExpertiseField
                name="jobRole"
                className="area-of-expertise-input"
                value={this.state.jobRole}
                callback={this.handleChanges}
              />
            </div>
          </div>
          <div className="field">
              <div className="field-name">Where did you hear about us<span className="imp-field">*</span></div>
              <div className="input">
                <ChannelField
                  name="channel"
                  className="channel-input"
                  value={this.state.channel}
                  callback={this.handleChanges}
                />
              </div>
          </div>
          <div className="field">
              <div className="field-name">Where do you want to work<span className="imp-field">*</span></div>
              <div className="input">
                <LocationField
                  name="location"
                  className="location-input"
                  value={this.state.location}
                  callback={this.handleChanges}
                />
              </div>
          </div>
          <div className="field">
            <div className="field-name">Your Resume (&lt; 1MB)<span className="imp-field">*</span></div>
            <div className="input">
              <input type="file" placeholder="Upload Resume" accept=".doc,.docx,.pdf" onChange={this.handleFiles} ></input>
            </div>
          </div>
          <div className="error">{this.state.error}</div>
          <div className="error">{this.state.fieldError}</div>
          <Button color="light-purple-background white" onClick={this.submitResume}>Submit Application</Button>
        </div>
      );
    } else {
      return (
        <div className="form-jd">
          <div className="success">Thank you for submitting your details! We will contact you shortly.</div>
        </div>
      );
    }
  }
}

const GraphicCard = graphic => {
  return <div className="graphic-card">{graphic}</div>;
};

export default function joinus({ location }) {
  const emailDomain = EMAIL_DOMAIN;
  const breakpointColumnsObj = {
    default: 2,
    991.98: 1,
  };
  return (
    <Layout className="join-us-page" title="Join Us" location={location}>
      <div className="join-us">
        <div className="intro-section">
          <div className="small-title">Join Us</div>
          <h1 className="header-text">Encouraging human ingenuity</h1>
          <div className="desc">
            We are not a software factory that relies on regimented processes and rigid methods, we are proponents of out-of-box thinking and fearless creativity; our fluid workplace is a breeding ground for bold, experimental ideas - come, experience it!
          </div>
        </div>
        <div className="join-us-card-container">
          <JoinUsDescCard
            title={"Home to artisans"}
            paras={[
              "At Sahaj, small, decentralized teams promote independent authority and freedom to solve problems creatively. This path nurtures the artisan in every individual as they craft purpose-built solution for clients.",
            ]}
          />
          <JoinUsDescCard
            title={"Leading the path"}
            paras={[
              "At Sahaj, you will be at the helm, solving the most important problems for clients in teams that trust you, respect your craft and expect you to relentlessly pursue what is best for the client.",
            ]}
          />
          <JoinUsDescCard
            title={"First principles thinking"}
            paras={[
              "Resumes and certificates are passé. We look at your code or how you pair with one of us to solve a problem. We want to see how you put the basics to work and challenge assumptions or conventions in the pursuit of a better solution.",
            ]}
          />
        </div>

        <div className="open-roles-section">
          <h2 className="top-title" id="openroles">Open Roles</h2>
          <div className="position-header">
            <h1 className="position-name">
              Solution Consultant
            </h1>

          </div>
          <div className="position-container">
            <div className="navigation">
              <Navigation />
            </div>
            <div className="description">
              <div className="jd-para">
                <h1 className="header-text" id="who-are-we">Who are we?</h1>
                <div className="descp" id="why-sahaj">
                  Sahaj is an artisanal, software engineering consultancy built on the values of trust, respect, curiosity and craftsmanship. We deliver purpose-built solutions to drive data-led transformation for organizations. Our emphasis is on craft as we create solutions with a razor-sharp focus to solve complex business and technology challenges and provide customers with a competitive edge.
                </div>
              </div>
              <div className="jd-para">
                <h1 className="header-text">Why Sahaj?</h1>
                <div className="descp" id="what-you-do">
                  You will feel at home if you are hands-on and are passionate about building things using technology. We are extremely selective with our consultants and as such, are able to run our teams with fewer levels of management. You won’t find a BA or iteration manager here! We work in small pizza-teams of 2-5 people where a well-founded argument holds more weight than years of experience.
                </div>
              </div>
              <div className="jd-para">
                <h1 className="header-text">What you’ll do?</h1>
                <div className="descp">
                  <ul className="descp-list">
                    <li>
                      You will work with clients across domains like retail, banking, publishing, education, adtech and more.
                    </li>
                    <li>
                      You will be given ownership of your work, and encouraged to propose alternatives and make a case for doing things differently; our clients trust us.
                    </li>
                    <li>
                      Collaborate with Data Scientists and Engineers to deliver production quality AI and Machine Learning systems.
                    </li>
                    <li>
                      Build frameworks and supporting tooling for data ingestion from a complex variety of sources.
                    </li>
                    <li>
                      Consult with our clients on data strategy, modernizing their data infrastructure, architecture and technology.
                    </li>
                    <li>
                      Model their data for increased visibility and performance.
                    </li>
                    <li>
                      The teams you work with will have experienced and smart people with no roles.
                    </li>
                    <li>
                      The team will self-organize without oversight to own and deliver solutions end to end.
                    </li>
                    <li>
                      You will work in short sprints to deliver working software.
                    </li>
                  </ul>
                </div>
                <div className="descp" id="skills-need">
                  You can read more about <a href="/what-we-do" className="what-we-do">What we do</a> and <a href="/what-we-think" className="what-we-think">What we think</a>
                </div>
              </div>
              <div className="jd-para">
                <h1 className="header-text">Skills you will need</h1>
                <div className="descp">
                  <ul className="descp-list">
                    <li>Demonstrated experience as a Data Engineer (preferably 5+ years experience).</li>
                    <li>Deep understanding of technology fundamentals and experience with languages like Python or functional programming languages like Scala.</li>
                    <li>Demonstrated experience in design and development of big data applications using a Spark-based tech stack.</li>
                    <li>Commendable skills in building data products by integrating large sets of data from hundreds of internal and external sources would be highly critical.</li>
                    <li>A nuanced understanding of code quality, maintainability and practices like Test Driven Development.</li>
                    <li>Understanding CI/CD. Understanding of Cloud platforms, DevOps, GitOps, Containers.</li>
                    <li id="culture">Willingness to be a polyglot developer and learn multiple technologies.</li>
                  </ul>
                </div>
              </div>
              <div className="jd-para" >
                <h1 className="header-text">Culture</h1>
                <div className="descp" id="perks">
                  At Sahaj, people’s collective stands for a shared purpose where everyone owns the dreams, ideas, ideologies, successes and failures of the organisation - a synergy that is rooted in the ethos of honesty, respect, trust, and equitability. Our culture nurtures and demands creativity, ownership, curiosity and craftsmanship.
                </div>
              </div>
              <div className="jd-para">
                <h1 className="header-text">Perks</h1>
                <div className="descp">
                  <ul className="descp-list">
                    <li>Unlimited annual leave</li>
                    <li>Paid life insurance &amp; private health insurance</li>
                    <li>Profit share</li>
                    <li>Employee stock options</li>
                    <li>Culture built on trust and transparency (we have open salaries!)</li>
                    <li>Challenging work &amp; experienced colleagues</li>
                  </ul>
                </div>
              </div>
              <div className="jd-para" id="apply">
                <h1 className="header-text">Apply</h1>
                <div className="descp">
                  <JDForm />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="join-us-card-container">
          <div className="write-to-us-card greenish-blue-background">
            <div className="core-text">
              <div className="desc-text">Have any questions or are interested in a different role? Write to us at</div>
              <div className="mailto-text">
                <a
                  href={"mailto:connect@" + emailDomain}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  connect@{emailDomain}
                </a>
              </div>
            </div>
            <div className="design-container disable-on-mobile disable-small">
              <div className="left">
                <LeftBase />
              </div>
              <div className="right">
                <RightBase />
              </div>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
}
