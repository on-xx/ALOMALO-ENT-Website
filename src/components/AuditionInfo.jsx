const AuditionInfo = () => {
    return (
        <div id="audition-info">
            <div className="audition-info container">
                <div className="audition-info-title">
                    <h2>AUDITION</h2>
                    <p>알로말로휴메인 엔터테인먼트와 함께 할</p>
                    <p>신인 아티스트들을 기다리고 있습니다.</p>
                    <p>오디션을 희망하시는 모든 분들은</p>
                    <p>아래 안내되어 있는 사항들을 확인 후 지원바랍니다.</p>
                    <p>보내주신 자료는 모두 신중하게 검토됩니다.</p>
                </div>
                <div className="audition-info-card-wrapper flex-row">
                    <div className="audition-info-card flex-column">
                        <div className="audition-info-card-title">
                            <h3>모집 부문</h3>
                        </div>
                        <div className="audition-info-card-content">
                            <p>연기, 노래</p>
                        </div>
                    </div>
                    <div className="audition-info-card flex-column">
                        <div className="audition-info-card-title">
                            <h3>지원 방법</h3>
                        </div>
                        <div className="audition-info-card-content">
                            <p>메일 접수&nbsp;&nbsp; alomalohm@naver.com</p>
                        </div>
                    </div>
                </div>
                <div className="audition-info-card-wrapper flex-row">
                    <div className="audition-info-card flex-column">
                        <div className="audition-info-card-title">
                            <h3>필수 첨부 파일</h3>
                        </div>
                        <div className="audition-info-card-content">
                            <p>1) PDF, PPTX 형식의 프로필</p>
                            <p>2) 정면 및 전신사진 파일 (최소 2장 이상)</p>
                            <p>3) 지원 분야에 따른 영상 파일</p>
                            <p>- 자유 연기 영상 파일</p>
                            <p>- 1차 서류 합격 되신 분에게는 14일 이내에 개별 연락을 드린다는 점 참고 부탁드립니다.</p>
                        </div>
                    </div>
                    <div className="audition-info-card flex-column">
                        <div className="audition-info-card-title">
                            <h3>유의 사항</h3>
                        </div>
                        <div className="audition-info-card-content">
                            <p>- 필수 파일 형식이 아닐 경우, 연기 영상 미첨부시 1차 서류 심사에서 제외됩니다.</p>
                            <p>- 당사에 접수 된 파일은 반환 되지 않습니다.</p>
                            <p>- 외국인은 접수 대상이 아닙니다.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AuditionInfo